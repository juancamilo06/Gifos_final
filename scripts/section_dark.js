night_mode.addEventListener("click", ()=>{
    body_page.classList.toggle("dark");
    page_contain[0].classList.toggle("dark");
    night_mode.innerHTML= night_mode.innerHTML == "modo nocturno" ? "modo diurno" : "modo nocturno";
    if (night_mode.innerHTML == "modo diurno"){
        body_page.style.background = "#37383C"; 
        line_decoration[0].style.background = "#000000";
        line_decoration[1].style.background = "#000000";
        logo[0].src = "./assets/img/Logo-modo-noc.svg";
        burger_icon[0].src = "./assets/img/burger-modo-noct.svg";
        close_icon[0].src = "./assets/img/close-modo-noct.svg";
        close_icon_fs.src = "./assets/img/close-modo-noct.svg"
        btn_new_gifs[0].src = "./assets/img/CTA-crear-gifo-modo-noc.svg";
        btn_new_gifs_hover[0].src = "./assets/img/CTA-crear-gifo-hover-modo-noc.svg";
        btn_arrow[0].src = "./assets/img/button-slider-left-md-noct.svg";
        btn_arrow_hover[0].src = "./assets/img/slider-left-noc-hover.png";
        btn_arrow[1].src = "./assets/img/button-slider-right-md-noct.svg";
        btn_arrow_hover[1].src = "./assets/img/slider-right-noc-hover.png";
        search_icon[0].src = "./assets/img/icon-search-mod-noc.svg";
        close_suggest_icon.src = "./assets/img/close-modo-noct.svg";
        small_camara_tape_img.src ="./assets/img/element_cinta1-modo-noc.svg";
        big_camara_tape_img.src ="./assets/img/element_cinta2-modo-noc.svg";
        camara_body_img.src = "./assets/img/element-camara.svg";
        camara_tape_img.src = "./assets/img/pelicula-modo-noc.svg";
        console.log(btn_arrow, btn_arrow_fs, btn_arrow_hover_fs)
    }else{
        body_page.style.background = "white"; 
        line_decoration[0].style.background = "#572EE5";
        line_decoration[1].style.background = "#572EE5";
        logo[0].src = "./assets/img/logo-desktop.svg";
        burger_icon[0].src = "./assets/img/burger.svg";
        close_icon[0].src = "./assets/img/close.svg";
        close_icon_fs.src = "./assets/img/close.svg";
        btn_new_gifs[0].src = "./assets/img/button-crear-gifo.svg";
        btn_new_gifs_hover[0].src = "./assets/img/CTA-crear-gifo-hover.svg";
        btn_arrow[0].src = "./assets/img/button-slider-left.svg";
        btn_arrow_hover[0].src = "./assets/img/button-slider-left-hover.svg";
        btn_arrow[1].src = "./assets/img/button-slider-right.svg";
        btn_arrow_hover[1].src = "./assets/img/button-slider-right-hover.svg";
        search_icon[0].src = "./assets/img/icon-search.svg";

        close_suggest_icon.src = "./assets/img/close.svg";
        small_camara_tape_img.src ="./assets/img/element_cinta1.svg";
        big_camara_tape_img.src = "./assets/img/element_cinta2.svg";
        camara_body_img.src = "./assets/img/element-camara.svg";
        camara_tape_img.src = "./assets/img/pelicula.svg";

    }
});
