// SECCION CAROUSEL
// APLICAMOS LA PROMESA
let fetch_gifo_trending =() => {
    fetch(url_trending)
    .then(responese => responese.json())
    .then(gifo_response => {
        for(let i=0; i<num_gifs_arrow; i++){
            let gifo = new New_gifo(gifo_response.data[i], "gifo-trending-"+(i+1), "fav-icon-gt-"+(i+1),"fav-icon-act-gt-"+(i+1),"dow-icon-gt-"+(i+1),"full-screen-icon-gt-"+(i+1),"trash-icon-gt-"+(i+1));
            trending_gifs_array.push(gifo);
            gifo_trending(i);
        }
    }).catch(message_error => console.log(message_error));
}
//SE CREA EL NODO CON ID Y DESCIPCIONES
let gifo_trending = (i) =>{
    add_gifo_card(arrow[0],"trending-gifo",trending_gifs_array,i);
}
// FUNCIONES DE LAS FLECHAS PARA MOVER EL CAROUSEL
for(let i = 0; i < num_gifs_arrow; i++){
    position_gifs.push(0); 
}
arrow_btn_right.addEventListener("click", () =>{
    if( Math.abs(position_gifs[0]) < (dist*x)){
        slide_function(-dist);
    }else if(arrow[0].clientWidth < max_width_arrow_cotainer && dist_2 == 0){
        dist_2 = max_width_arrow_cotainer - arrow[0].clientWidth;
        slide_function(-(dist_2));
    }
});
arrow_btn_left.addEventListener("click", () =>{
    if(position_gifs[0] < 0 && position_gifs[0]+dist <= 0 ){
        slide_function(dist);
    }else if(dist_2 != 0 ){
        slide_function(dist_2);
        dist_2 = 0;
    }
});
//FUNCIONALIDAD MOVER
let slide_function = (dist) =>{
    let gifs_contents = document.getElementsByClassName("gifs-contents trending-gifo");
    for (let i = 0; i<gifs_contents.length;i++){
        position_gifs[i] += dist;
        gifs_contents[i].style.transform = "translateX("+(position_gifs[i])+"px)";
    }
}
