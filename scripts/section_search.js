// BUSCAR GIFOS

// SUGERENCIAS
search_input[0].addEventListener("focus", () =>{
    search_icon_active[0].style.display = "block";
    search_contents[0].style.borderBottom =  "1px solid #9CAFC3";
    search_icon[0].style.display = "none";
    close_suggest_icon.style.display = "block";
    suggest_contents[0].style.display = "block";
});
//ACCION DEL ICONO CERRAR DENTRO DE LA CAJA
close_suggest_icon.addEventListener("click", () =>{
    search_input[0].value ="";
    search_icon_active[0].style.display = "none";
    search_contents[0].style.borderBottom = "none";
    close_suggest_icon.style.display = "none";
    search_icon[0].style.display = "block";
    suggest_contents[0].style.display = "none";
    results_contain.style.display = "none";
    line_search.style.display = "none";
    search_without_result_contain.style.display ="none";
    if(search_mobile){
        page_title.style.display = "block";
        img_welcome_gifs.style.display = "block";
        search_contain[0].style.marginTop = "0px";
    }
});
//SUGERENCIAS DE LA API
search_input[0].addEventListener("keyup",(evento)=>{
    if(evento.keyCode == key_code_enter){
        searchGifo();
    }else{
        suggest_contents[0].style.display = "block";
        let q = "q="+search_input[0].value;
        let url_autocomplete = "https://api.giphy.com/v1/gifs/search/tags?"+q+"?&"+api_key;
        fetch(url_autocomplete)
        .then(response => response.json())
        .then(response_suggest =>{
            add_suggest(response_suggest.data);
        })
        let add_suggest = (suggest_list) =>{
            const num_suggest = suggest_addition.length;
            for(let i=num_suggest-1;i>=0;i--){
                suggest_contents[0].removeChild(suggest_addition[i]);
            }
            for(let i=0; i<suggest_list.length;i++){
                suggest_contents_clone = suggest_addition_reference.cloneNode(true);
                suggest_contents_clone.id = "suggest_contents" + (i+1);
                suggest_contents[0].appendChild(suggest_contents_clone);
                suggest_content[i].innerHTML = suggest_list[i].name;
            }
        }
    }
});

//BUSQUEDA DEL GIFO EN GENERAL
let selectSuggest = (suggest) =>{
    search_input[0].value = suggest.innerHTML;
    searchGifo();
}
let searchGifo = () =>{
    search_contents[0].style.borderBottom = "none";
    suggest_contents[0].style.display = "none";
    line_search.style.display = "block";
    if(search_mobile){
        page_title.style.display = "none";
        img_welcome_gifs.style.display = "none";
        search_contain[0].style.marginTop = "17px";
    }
    let q = "q="+search_input[0].value;
    let url_search_gifs = "https://api.giphy.com/v1/gifs/search?"+q+"?&"+api_key; 
    gifs_searched_array.splice(0);
    num_gifs_results = 0;
    // REQUEST A LA API
    results_title[0].innerHTML = search_input[0].value;
    fetch(url_search_gifs)
    .then(response => response.json())
    .then(response_search => {
        for(let i=0; i<response_search.data.length;i++){
            let gifo = new New_gifo(response_search.data[i], "gifo-search-"+(i+1), "fav-icon-gs-"+(i+1),"fav-icon-act-gs-"+(i+1),"dow-icon-gs-"+(i+1),"full-screen-icon-gs-"+(i+1),"trash-icon-gs-"+(i+1));
            gifs_searched_array.push(gifo);
        }
        delete_gifo_cards_finded();
        add_gifo_cards_finded();
    })
}
let delete_gifo_cards_finded = () =>{
    for(let i=gifs_contents_searched.length-1;i>=0;i--){
        results_gifs_section.removeChild(gifs_contents_searched[i]);
    }
}
//AGREGARS LAS TARJETAS A LOS GIFOS
let add_gifo_cards_finded = () => {
    if(gifs_searched_array.length != 0){
        search_without_result_contain.style.display ="none";
        results_contain.style.display = "block";
        see_more_button_search.style.display = "block";
        if(num_gifs_results <= gifs_searched_array.length){
            let lim_sup = num_gifs_results+12 <= gifs_searched_array.length? 
                num_gifs_results+12: 
                num_gifs_results+(gifs_searched_array.length-num_gifs_results)
            ;
            for(let i=num_gifs_results; i<(lim_sup);i++){
                add_gifo_card(results_gifs_section,"gifo-searched",gifs_searched_array,i);
            }
            num_gifs_results = gifs_contents_searched.length;
        }
        if(gifs_searched_array.length == num_gifs_results){
            see_more_button_search.style.display = "none";
        }
    }
    else{
        results_contain.style.display = "none";
        search_without_result_title.innerHTML = search_input[0].value;
        search_without_result_contain.style.display ="block";
    }
}

see_more_button_search.addEventListener("click", () =>{
    add_gifo_cards_finded();
});

fetch(url_tags)
.then(response => response.json())
.then(data => {
    for(let i = 0; i<5; i++) {
        popular_tag[i] = data.data[i];
        popular_tag[i].textContent = data.data[i];
        let add_trending_tag = () => {search_input[0].value = popular_tag[i].textContent};
        popular_tag[i].addEventListener("click", () => {
            add_trending_tag();
            searchGifo();
        })
    }
}).catch(mesagge_error => console.log(mesagge_error));

