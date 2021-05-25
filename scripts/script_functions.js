
//API TRAIDA DE LA PAGINA GIPHY DEVOLPERS
// NODOS A COPIAR EN LAS CARD GIFS
let api_key = "api_key=FlZXiPWXIUF4uUsPsrsm2PE1dSg3Lh41";
let gifs_contents_reference = document.getElementById("gifs-contents-reference");
let fullView_gifo = document.getElementById("gifo-full-screen");
let fullView_user = document.getElementById("user-full-screen");
let fullView_title = document.getElementById("title-full-screen");
let fullView_icon_delete = document.getElementsByClassName("fs-delete-icon")
let fullView_icon_fav_act = document.getElementsByClassName("fs-fav-act-contents");
let fullView_icon_fav = document.getElementsByClassName("icon-fav-full-screen");
let fullView_icon_dow = document.getElementsByClassName("icon-dow-full-screen");
// MENU HAMBURGUESA
let burger_menu = document.getElementById("show-menu");
//FUNCIONALIDAD DARK MODE
let body_page = document.getElementsByTagName("body")[0];
let line_decoration = document.getElementsByClassName("all-lines");
let logo = document.getElementsByClassName("logo");
let burger_icon = document.getElementsByClassName("burguer-menu");
let close_icon = document.getElementsByClassName("close-menu");
let close_icon_fs = document.getElementById("close-full-screen");
let night_mode = document.getElementById("btn_night_mode");
let page_contain = document.getElementsByClassName("section-main");
let btn_new_gifs = document.getElementsByClassName("btn-new-gifs-normal");
let btn_new_gifs_hover = document.getElementsByClassName("btn-new-gifs-hover");
let btn_arrow = document.getElementsByClassName("arrow-icon");
let btn_arrow_fs = document.getElementsByClassName("arrow-icon-fs");
let btn_arrow_hover = document.getElementsByClassName("arrow-icon-hover");
let btn_arrow_hover_fs = document.getElementsByClassName("arrow-icon-hover-fs");
let search_icon = document.getElementsByClassName("search-icon");

let small_camara_tape_img = document.getElementsByClassName("small-camara-tape-img")[0];
let big_camara_tape_img = document.getElementsByClassName("big-camara-tape-img")[0];
let camara_body_img = document.getElementsByClassName("camara-body-img")[0];
let camara_tape_img = document.getElementsByClassName("camara-tape-img")[0];

let twitter_icon_normal = document.getElementsByClassName("twitter-icon-normal")[0];
let twitter_icon_hover = document.getElementsByClassName("twitter-icon-hover")[0];
// BUSCADOR DE GIFOS NODOS
let search_gifs_contain = document.getElementsByClassName("section-search")[0];
let page_title =  document.getElementById("page-title");
let img_welcome_gifs = document.getElementById("img-welcome-gifs"); 
let search_contain = document.getElementsByClassName("search-contain");
let search_contents = document.getElementsByClassName("search-contents");
let search_icon_active = document.getElementsByClassName("search-icon-active");
let close_suggest_icon = document.getElementById("close-suggest-icon");
let search_input = document.getElementsByClassName("search-input");
let suggest_contents = document.getElementsByClassName("suggest-contents");
let suggest_addition_reference = document.getElementById("suggest-addition-reference");
let suggest_addition = document.getElementsByClassName("suggest-addition");
let suggest_content = document.getElementsByClassName("suggest");
let num_gifs_results = 0;
let results_contain = document.getElementById("results-contain");
let results_title = document.getElementsByClassName("results-title")
let results_gifs_section = document.getElementById("results-gifs-section");
let gifs_contents_searched = document.getElementsByClassName("gifo-searched");
let see_more_button_search = document.getElementById("see-more-button-search");
let search_without_result_contain = document.getElementsByClassName("search-without-result-contain")[0];
let search_without_result_title = document.getElementsByClassName("search-without-result-title")[0];
let gifs_searched_array = [];
let key_code_enter = 13;
let popular_tag = document.getElementsByClassName("popular-tag");
let url_tags = "https://api.giphy.com/v1/trending/searches?"+api_key;
let line_search =  document.getElementsByClassName("all-lines-search")[0];
let search_mobile = screen.width<1024 ? true:false;
// NODOS DE FAVORITOS
let btn_fav_menu = document.getElementById("favourite-addition-menu");
let favorite_gifs_section = document.getElementsByClassName("section-favorite")[0];
let favorite_gifs_contain = document.getElementById("favorite-gifs-contain");
let without_favorite_cotainer = document.getElementsByClassName("without-favorites-contain")[0];
let gifo_contents_favorite = document.getElementsByClassName("gifo-favorite");
let see_more_button_favorite = document.getElementById("see-more-button-favorite");
let num_gifs_favorites = 0;
let favorite_array;

//NODOS MIS GIFOS

let my_gifs_section =  document.getElementsByClassName("section-myGif")[0];
let btn_my_gifo_menu = document.getElementById("btn_my_gifs");
let mis_gifs_contain = document.getElementById("mis-gifs-contain");
let without_my_gifs =  document.getElementsByClassName("without-my-gifs-contain")[0];
let see_more_button_mygifs =  document.getElementById("see-more-button-mygifs");

let gifo_contents_myGifo = document.getElementsByClassName("gifo-myGifo");


let num_gifs_mygifs = 0;

let created_gifs_array;


//CREAR GIFOS
let url_upload_gifo = "https://upload.giphy.com/v1/gifs?"+api_key;  
let btn_new_gifo_menu =  document.getElementsByClassName("contents-new-gifo")[0];
let create_gifs_section = document.getElementsByClassName("section-createGif")[0]; 
let rotate = 45;
let high_light = document.getElementById("high-light-img");
let create_gifo_start = document.getElementById("create-gifo-start");
let create_gifo_acces_cam = document.getElementById("create-gifo-acces-cam");
let cam_screen_contain = document.getElementsByClassName("cam-screen-contain")[0];
let cam_stream = document.getElementsByClassName("cam-stream")[0];
let video_stream;
let recorder;
// CRONOMETRO
let form = new FormData();
let chronometer_addition = document.getElementById("chronometer");
let chronometer;
let hours = ["0","0"];
let minutes = ["0","0"];
let seconds = ["0","0"];
let record_again = document.getElementById("record-again"); 
let uploannding_gifo_contents = document.getElementById("uploannding-gifo-contents");
let uploaded_gifo_contents = document.getElementById("uploaded-gifo-contents");
let btn_start_gifo = document.getElementById("btn-start-gifo");
let btn_record_gifo = document.getElementById("btn-record-gifo");
let btn_end_gifo = document.getElementById("btn-end-gifo");
let btn_up_gifo = document.getElementById("btn-up-gifo");
let step_addition = document.getElementsByClassName("step-addition");

// CAROUSEL
let url_trending = "https://api.giphy.com/v1/gifs/trending?"+ api_key;
let trending_gifs_section = document.getElementsByClassName("section-trending")[0];
let arrow = document.getElementsByClassName("arrow");
let num_gifs_arrow = 10;
let trending_gifs_array = [];
let arrow_btn_left = document.getElementById("arrow-btn-left");
let arrow_btn_right = document.getElementById("arrow-btn-right");
let dist = (357+30);
let dist_2 = 0;
let position_gifs = [];
let x = num_gifs_arrow - 3;
let max_width_arrow_cotainer = 1161;
window.onload = function() {
    body_page.removeChild(gifs_contents_reference);
    suggest_contents[0].removeChild(suggest_addition_reference);
    list_favorites();
    list_gifs_created();
    fetch_gifo_trending();
    delete_gifo_card_migifs();
    add_my_gifo_cards();
}   

// CLASE PARA GIFOS BUSCADOS
class New_gifo {
    constructor(url_gif, id_gif_img, id_fav_gif_icon,id_fav_gif_activate_icon, id_dow_gif_icon, id_fs_gif_icon,id_trash_icon){
        this.url_gif = url_gif;
        this.id_gif_img = id_gif_img;
        this.id_fav_gif_icon = id_fav_gif_icon;
        this.id_fav_gif_activate_icon = id_fav_gif_activate_icon 
        this.id_dow_gif_icon = id_dow_gif_icon;
        this.id_fs_gif_icon = id_fs_gif_icon;
        this.id_trash_icon = id_trash_icon;
    }
} 

// AGREGAR GIFO
let add_gifo_card =(parent_node,specific_class,gifs_list,i)=>{
    let gifs_contents_clone = gifs_contents_reference.cloneNode(true);
    gifs_contents_clone.style.display = "inline-block";
    gifs_contents_clone.classList.toggle(specific_class);
    parent_node.appendChild(gifs_contents_clone);
    let gifo_img = document.querySelectorAll("div.gifs-contents."+ specific_class+" >label> img.gifo-img");
    gifo_img[i].src = gifs_list[i].url_gif.images.original.url;
    let title_gifo = document.querySelectorAll("div.gifs-contents."+ specific_class+">div.gifs-contents-hover>p.title-gifs");
    title_gifo[i].innerHTML = gifs_list[i].url_gif.title;
    let user_gifo = document.querySelectorAll("div.gifs-contents."+ specific_class+">div.gifs-contents-hover>p.user-gifs");
    user_gifo[i].innerHTML = gifs_list[i].url_gif.username == ""? "gifos User": gifs_list[i].url_gif.username;
    //MODIFICACION DE NODOS PARA REUTILIZAR
    gifo_img[i].id = gifs_list[i].id_gif_img;
    let gifo_trash_icon = document.querySelectorAll("div.gifs-contents."+ specific_class+"> div.gifs-contents-hover> div.icons-gifs-contents> div.delete-icon");
    gifo_trash_icon[i].id = gifs_list[i].id_trash_icon;
    let gifo_fav_icon = document.querySelectorAll("div.gifs-contents."+ specific_class+"> div.gifs-contents-hover> div.icons-gifs-contents> div.icon-fav");
    gifo_fav_icon[i].id = gifs_list[i].id_fav_gif_icon;
    let gifo_fav_icon_act = document.querySelectorAll("div.gifs-contents."+ specific_class+"> div.gifs-contents-hover> div.icons-gifs-contents> div.fav-icon-activate");
    gifo_fav_icon_act[i].id = gifs_list[i].id_fav_gif_activate_icon;
    let gifo_dow_icon = document.querySelectorAll("div.gifs-contents."+ specific_class+"> div.gifs-contents-hover> div.icons-gifs-contents> div.icon-download");
    gifo_dow_icon[i].id = gifs_list[i].id_dow_gif_icon;
    gifo_fs_icon = document.querySelectorAll("div.gifs-contents."+ specific_class+"> div.gifs-contents-hover> div.icons-gifs-contents> div.full-screen-icon");
    gifo_fs_icon[i].id = gifs_list[i].id_fs_gif_icon;
    display_fav_act_icon(gifs_list[i],i);
}

// FUNCIONALIDAD PARA AMPLIAR LOS GIFOS, FULL VIEW
// MODO MOBILE
let gifofullViewMobile =(gifo)=>{
    if(gifo.id.slice(0,13) == "gifo-trending"){
        let index = trending_gifs_array.findIndex(x => x.id_gif_img == gifo.id);
        gifo_fullView(index,trending_gifs_array);
    }else if(gifo.id.slice(0,11) == "gifo-search"){
        let index = gifs_searched_array.findIndex(x => x.id_gif_img == gifo.id);
        gifo_fullView(index,gifs_searched_array);
    }else if(gifo.id.slice(0,13) == "gifo-favorite"){
        let index = favorite_array.findIndex(x => x.id_gif_img == gifo.id);
        gifo_fullView(index,favorite_array);
    }else if(gifo.id.slice(0,12) == "gifo-created"){
        let index = created_gifs_array.findIndex(x => x.id_gif_img == gifo.id);
        gifo_fullView(index,created_gifs_array);
    }
}
// MODO DESKTOP
let gifofullViewDesktop =(gifo)=>{
    if(gifo.id.slice(0,19) == "full-screen-icon-gt"){
        let index = trending_gifs_array.findIndex(x => x.id_fs_gif_icon == gifo.id);
        gifo_fullView(index,trending_gifs_array);
    }else if(gifo.id.slice(0,19) == "full-screen-icon-gs"){
        let index = gifs_searched_array.findIndex(x => x.id_fs_gif_icon == gifo.id);
        gifo_fullView(index,gifs_searched_array);
    }else if(gifo.id.slice(0,19) == "full-screen-icon-gf"){
        let index = favorite_array.findIndex(x => x.id_fs_gif_icon == gifo.id);
        gifo_fullView(index,favorite_array);
    }else if(gifo.id.slice(0,19) == "full-screen-icon-gc"){
        let index = created_gifs_array.findIndex(x => x.id_fs_gif_icon == gifo.id);
        gifo_fullView(index,created_gifs_array);
    }
}
// PUSH DE INFORMACION A LA VISTA AMPLIADA
let gifo_fullView = (index, gifs_list)=>{
    fullView_gifo.setAttribute("src", gifs_list[index].url_gif.images.original.url)
    fullView_user.textContent = gifs_list[index].url_gif.username == ""? "gifos User": gifs_list[index].url_gif.username;
    fullView_title.textContent = gifs_list[index].url_gif.title;
    fullView_icon_fav[0].id = gifs_list[index].id_fav_gif_icon;
    fullView_icon_fav_act[0].id  = gifs_list[index].id_fav_gif_activate_icon;
    fullView_icon_dow[0].id = gifs_list[index].id_dow_gif_icon;
    fullView_icon_delete[0].id = gifs_list[index].id_trash_icon;
    let ind = favorite_array.findIndex(x => x.url_gif.id == gifs_list[index].url_gif.id);
    if(ind != -1){
        fullView_icon_fav[0].style.display ="none";
        fullView_icon_fav_act[0].style.display ="inline-block";
    }else{
        fullView_icon_fav[0].style.display ="inline-block";
        fullView_icon_fav_act[0].style.display ="none";
    }
    let index_Trash =  created_gifs_array.findIndex(x => x.url_gif.id == gifs_list[index].url_gif.id);
    if(index_Trash != -1 ){
        fullView_icon_fav[0].style.display ="none";
        fullView_icon_fav_act[0].style.display ="none";
        fullView_icon_delete[0].style.display = "inline-block";
    }else{
        fullView_icon_delete[0].style.display = "none";        
    }
}
// AGREGAR A FAVORITO
let newGifo = (icon_fav) =>{
    if(icon_fav.id.slice(0,12) == "fav-icon-gt-"){
        let index = trending_gifs_array.findIndex(x => x.id_fav_gif_icon == icon_fav.id);
        fav_bttn_efect("trending-gifo","gt",index)
        add_fav_gifo(trending_gifs_array[index].url_gif);
    }else if(icon_fav.id.slice(0,12) == "fav-icon-gs-"){
        let index = gifs_searched_array.findIndex(x => x.id_fav_gif_icon == icon_fav.id);
        fav_bttn_efect("gifo-searched","gs",index)
        add_fav_gifo(gifs_searched_array[index].url_gif);
    }
    if(favorite_gifs_section.style.display == "block"){
        delete_gifo_card_favorite();
        add_fav_gifo_cards();
    }
}
// TODO SOBRE EL BOTON FAVORITOS (HOVER)
let fav_bttn_efect = (gifo_type,g_type,index) => {
    
    let btn_fav_normal = document.querySelectorAll("div." + gifo_type + "> div.gifs-contents-hover > div.icons-gifs-contents > div#fav-icon-"+g_type+"-"+ (index+1));
    btn_fav_normal[0].style.display = "none";
    let btn_fav_activate = document.querySelectorAll("div." + gifo_type + "> div.gifs-contents-hover > div.icons-gifs-contents > div#fav-icon-act-"+g_type+"-"+ (index+1));
    btn_fav_activate[0].style.display = "inline-block";
    let btn_fav_normal_fs = document.querySelectorAll("div.full-screen-contain > div.icon-fav-full-screen ");
    btn_fav_normal_fs[0].style.display = "none";
    let btn_fav_active_fs = document.querySelectorAll("div.full-screen-contain > div.fs-fav-act-contents ");
    btn_fav_active_fs[0].style.display = "inline-block";
};

// PARA VER EXISTENCIA DEL GIFO
let display_fav_act_icon = (gifo,i) =>{
    let index = favorite_array.findIndex(x => x.url_gif.id == gifo.url_gif.id);
    if(index != -1){
        let id_gifo_fav = gifo.id_fav_gif_icon.slice(0,12);
        let fav_icon_normal = document.querySelectorAll("div#"+id_gifo_fav+(i+1));
        fav_icon_normal[0].style.display ="none";
        let id_gifo_fav_act = gifo.id_fav_gif_activate_icon.slice(0,16);
        let fav_icon_act = document.querySelectorAll("div#"+id_gifo_fav_act+(i+1));
        fav_icon_act[0].style.display ="block";
    }
}
// DESCARGAR LOS GIFOS
let downGifo = (gifo) => {
    if(gifo.id.slice(0,12) == "dow-icon-gt-"){
        let index = trending_gifs_array.findIndex(x => x.id_dow_gif_icon == gifo.id);
        let id_download = trending_gifs_array[index].url_gif.id;
        let title_download = "Gifo_Trending";
        downGifo_id(title_download,id_download);
    }else if(gifo.id.slice(0,12) == "dow-icon-gs-") {
        let index = gifs_searched_array.findIndex(x => x.id_dow_gif_icon == gifo.id);
        let id_download = gifs_searched_array[index].url_gif.id;
        let title_download = "Gifo_Search";
        downGifo_id(title_download,id_download);
    }else if(gifo.id.slice(0,12) == "dow-icon-gf-") {
        let index = favorite_array.findIndex(x => x.id_dow_gif_icon == gifo.id);
        let id_download = favorite_array[index].url_gif.id;
        let title_download = "Gifo_Favorite";
        downGifo_id(title_download,id_download);
    }else if(gifo.id.slice(0,12) == "dow-icon-gc-") {
        let index = created_gifs_array.findIndex(x => x.id_dow_gif_icon == gifo.id);
        let id_download = created_gifs_array[index].url_gif.id;
        let title_download = "My_Gifo";
        downGifo_id(title_download,id_download);
    }else if (gifo.id == "gifo_created_id"){
        let id_download = created_gifs_array[created_gifs_array.length -1 ].url_gif.id;
        let title_download = "My_Gifo";
        downGifo_id(title_download,id_download);
    }
}
let downGifo_id = (gif_title,gif_id) =>{
    // DESCARGAR GIFO
    let a = document.createElement("a");
    let url_downGifo = "https://media2.giphy.com/media/"+gif_id+"/giphy.gif?&"+api_key+"&rid=giphy.gif";
    fetch(url_downGifo)
    .then(responese => responese.blob())
    .then(data => {
        a.href = window.URL.createObjectURL(new Blob([data]));
        a.download = gif_title + ".gif";
        a.dataset.download = ['application/octet-stream', a.download, a.href].join(":");
        a.target = '_blank';
        a.click();
    });
}