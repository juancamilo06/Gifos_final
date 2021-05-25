// FAVORITOS FUNCIONALIDAD
let list_favorites = () =>{
    if(JSON.parse(localStorage.getItem("fav_gifs"))){
        favorite_array = JSON.parse(localStorage.getItem("fav_gifs"));
    }else{
        favorite_array = [];
    }
}
// AGREGAR GIFO AL AREGLO
let add_fav_gifo  = (url_gifo_fav)=>{
    let long = favorite_array.length;
    let gifo = new New_gifo(url_gifo_fav, "gifo-favorite-"+(long+1), "fav-icon-gf-"+(long+1),"fav-icon-act-gf-"+(long+1),"dow-icon-gf-"+(long+1),"full-screen-icon-gf-"+(long+1),"trash-icon-gf-"+(long+1));
    favorite_array.push(gifo);
    localStorage.setItem("fav_gifs",JSON.stringify(favorite_array));
}
let add_fav_gifo_cards = ()=>{
    if(favorite_array.length != 0){
        without_favorite_cotainer.style.display = "none";
        favorite_gifs_contain.style.display = "block";
        if(favorite_array.length > 12){
            see_more_button_favorite.style.display ="block";
            let lim_sup = num_gifs_favorites+12 <= favorite_array.length? 
                num_gifs_favorites+12:
                num_gifs_favorites+(favorite_array.length-num_gifs_favorites)
            ;
            for(let i=num_gifs_favorites; i<(lim_sup);i++){
                add_gifo_card(favorite_gifs_contain,"gifo-favorite",favorite_array,i);
            }
            num_gifs_favorites = gifo_contents_favorite.length;
        }else{
            see_more_button_favorite.style.display ="none"                    
            for(let i=0; i<favorite_array.length; i++){
                add_gifo_card(favorite_gifs_contain,"gifo-favorite",favorite_array,i);
            } 
        }
        if(favorite_array.length == num_gifs_favorites){
            see_more_button_favorite.style.display = "none"
        }

    }else{
        favorite_gifs_contain.style.display = "none";
        without_favorite_cotainer.style.display = "block";
    }
}
let delete_gifo_card_favorite = () =>{
    for(let i=gifo_contents_favorite.length-1;i>=0;i--){
        favorite_gifs_contain.removeChild(gifo_contents_favorite[i]);
    }
    num_gifs_favorites=0;
}
see_more_button_favorite.addEventListener("click", () =>{
    add_fav_gifo_cards();
});