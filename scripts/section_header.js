burger_menu.addEventListener("click", scroll_body);
function scroll_body(){
    let body_element = document.getElementsByTagName("body");
    if(body_element[0].style.overflow == "hidden"){
        body_element[0].style.overflow = "visible";
    }else{
        body_element[0].style.overflow = "hidden";
    }
}

let logo_gifs= document.getElementById("logo-gifs");
logo_gifs.addEventListener("click", ()=>{
    favorite_gifs_section.style.display = "none";
    my_gifs_section.style.display = "none";
    create_gifs_section.style.display = "none";
    trending_gifs_section.style.display = "block";
    search_gifs_contain.style.display ="block";
})

btn_fav_menu.addEventListener("click", ()=>{
    search_gifs_contain.style.display ="none";
    my_gifs_section.style.display = "none";
    create_gifs_section.style.display = "none";
    trending_gifs_section.style.display = "block";
    favorite_gifs_section.style.display = "block"
    delete_gifo_card_favorite();
    add_fav_gifo_cards();
});
btn_my_gifo_menu.addEventListener("click",() =>{
    search_gifs_contain.style.display ="none";
    create_gifs_section.style.display = "none";
    favorite_gifs_section.style.display = "none"
    my_gifs_section.style.display = "block";
    trending_gifs_section.style.display = "block";
    delete_gifo_card_migifs();
    add_my_gifo_cards();

});
btn_new_gifo_menu.addEventListener("click", () =>{
    search_gifs_contain.style.display ="none";
    favorite_gifs_section.style.display = "none";
    my_gifs_section.style.display = "none";
    trending_gifs_section.style.display = "none";
    create_gifs_section.style.display = "flex";
});
