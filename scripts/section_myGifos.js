// CREAR UN NUEVO GIFO
btn_start_gifo.addEventListener("click",()=>{
    create_gifo_start.classList.toggle("show-gifo-step");
    create_gifo_acces_cam.classList.toggle("show-gifo-step");
    btn_start_gifo.classList.toggle("show-bttn");
    step_addition[0].classList.toggle("step-addition-selected");
    acces_user_cam();
});

//PERMISO PARA ACCESO A LA CAMARA
let acces_user_cam = () =>{
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 320 }
        }    
    })
    .then(response_stream =>{
        show_record_elements(response_stream);
    });    
}
// STEPS BOTONES Y EFECTOS DESPUES DE CADA ACCION
let show_record_elements = (stream) =>{
    cam_stream.srcObject = stream;
    cam_stream.play();
    create_gifo_acces_cam.classList.toggle("show-gifo-step");
    cam_screen_contain.classList.toggle("show-gifo-step");
    btn_record_gifo.classList.toggle("show-bttn");
    step_addition[0].classList.toggle("step-addition-selected");
    step_addition[1].classList.toggle("step-addition-selected");
    video_stream = stream;
}

//GRABAR CON METODO recordRTC
let functions_stream = () =>{
    recorder = RecordRTC(video_stream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function() {
            console.log('started')
        },
    });
    // COMENZAR A GRABAR
    recorder.startRecording();
    chronometer_addition.style.display = "block";
    chronometer =  setInterval(chronometer_function,1000);
}
btn_record_gifo.addEventListener("click", () =>{
    btn_record_gifo.classList.toggle("show-bttn");
    btn_end_gifo.classList.toggle("show-bttn");
    functions_stream();
});
//PARAR GRABACION
btn_end_gifo.addEventListener("click", () =>{
    recorder.stopRecording(function() {
        var blob = this.getBlob();
        form.append('file', blob, 'myGif.gif');
        clearInterval(chronometer);
        chronometer_addition.style.display = "none";
        record_again.style.display = "block";
        btn_end_gifo.classList.toggle("show-bttn");
        btn_up_gifo.classList.toggle("show-bttn");
    });
});
//PARAR LA CAMARA
function stopStreamedVideo(videoElem) {
    const stream = videoElem.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(function(track) {
    track.stop();
    });
    videoElem.srcObject = null;
}
//VOLVER A GRABAR
record_again.addEventListener("click", ()=>{
    btn_up_gifo.classList.toggle("show-bttn");
    btn_end_gifo.classList.toggle("show-bttn");
    record_again.style.display = "none";
    chronometer_addition.innerHTML = "00:00:00";
    hours = ["0","0"];
    minutes = ["0","0"];
    seconds = ["0","0"];
    form.delete('file');
    functions_stream();   
});

//SUBIR EL GIFO CREADO
btn_up_gifo.addEventListener("click", ()=>{
    record_again.style.display = "none";
    btn_up_gifo.classList.toggle("show-bttn");
    step_addition[1].classList.toggle("step-addition-selected");
    step_addition[2].classList.toggle("step-addition-selected");
    uploannding_gifo_contents.style.display = "block";
    upload_new_gifo();
});
let upload_new_gifo = () =>{
    //METODO POST PARA HACER EL REQUEST
    fetch(url_upload_gifo,{
        method: "POST",
        body: form
    }).then(response => response.json())
    .then(data =>{
        //ID DEL GIFO
        console.log(data.data.id);
        search_gifo_byId(data.data.id);
    }).catch(mesagge_error => console.log(mesagge_error));
}
//BUSCAR GIFO POR ID
let search_gifo_byId = (gif_id)=>{
    let url_search_gifs_by_ID = "https://api.giphy.com/v1/gifs/"+gif_id+"?&"+api_key;
    fetch(url_search_gifs_by_ID)
    .then(response => response.json())
    .then(data_new_gifo => {
        //OBJETO QUE SE ALMACENARA EN LOCA STORAGE 
        let long = created_gifs_array.length;
        let gifo = new New_gifo(data_new_gifo.data, "gifo-created-"+(long+1), "fav-icon-gc-"+(long+1),"fav-icon-act-gc-"+(long+1),"dow-icon-gc-"+(long+1),"full-screen-icon-gc-"+(long+1),"trash-icon-gc-"+(long+1));
        created_gifs_array.push(gifo);
        localStorage.setItem("new_gifo",JSON.stringify(created_gifs_array));
        uploannding_gifo_contents.style.display = "none";
        uploaded_gifo_contents.style.display = "block";   
        stopStreamedVideo(cam_stream);
        cam_stream.style.display = "none";
        let gif_stream = document.getElementsByClassName("gif-stream")[0];
        gif_stream.style.display = "block";
        gif_stream.src = data_new_gifo.data.images.original.url;
    });
}

//CRONOMETRO
let chronometer_function = ()=>{
    seconds[1] = parseInt(seconds[1]) + 1; 
    if(seconds[1] == 10){
        seconds[0] = ""; 
    }else if(seconds[1] == 60){
        minutes[1]= (parseInt(minutes[1])+1).toString(); 
        seconds[0] = "0";
        seconds[1] = "0";
    }
    if(minutes[1]==10){
        minutes[0] = ""; 
    }else if(minutes[1] == 60){
        hours[1]= (parseInt(hours[1])+1).toString(); 
        minutes[0] = "0";
        minutes[1] = "0";
    }
    if(hours[1]==10){
        hours[0] = ""; 
    }else if(hours[1]==24){
        hours[0] = "0";
        hours[1] = "0";
    }
    let hs = hours[0]+hours[1];
    let mm = minutes[0] + minutes[1];
    let ss = seconds[0] + seconds[1];
    chronometer_addition.innerHTML = hs +":"+mm+":"+ss;
}


//FUNCIONES DE MIS GIFOS

let list_gifs_created = () =>{
    //SE INDAGA EN EL LOCAL STORAGE
    if(JSON.parse(localStorage.getItem("new_gifo"))){
        created_gifs_array = JSON.parse(localStorage.getItem("new_gifo"));
    }else{
        created_gifs_array = [];
    }
}
//AGREGACION DE LAS TARJETAS A LOS GIFOS
let add_my_gifo_cards = () =>{
    if(created_gifs_array.length != 0 ){
        without_my_gifs.style.display = "none";
        mis_gifs_contain.style.display = "block";
        if(created_gifs_array.length > 12){
            see_more_button_mygifs.style.display = "block";
            let lim_sup = num_gifs_mygifs+12 <= created_gifs_array.length? 
            num_gifs_mygifs+12:
            num_gifs_mygifs+(created_gifs_array.length-num_gifs_mygifs)
            ;
            for(let i=num_gifs_mygifs; i<(lim_sup);i++){
                add_gifo_card(mis_gifs_contain,"gifo-myGifo",created_gifs_array,i);
                let fav_icon_mygifs = document.getElementById("fav-icon-gc-"+(i+1));
                fav_icon_mygifs.style.display = "none";
                let trash_icon_mygifs =  document.getElementById("trash-icon-gc-"+(i+1));
                trash_icon_mygifs.style.display = "inline-block";
            }
        // REPETIMOS LA FUNCION 
            num_gifs_mygifs = gifo_contents_myGifo.length;
        }else{
            see_more_button_mygifs.style.display = "none";
            for(let i=0; i<created_gifs_array.length; i++){
                add_gifo_card(mis_gifs_contain,"gifo-myGifo",created_gifs_array,i);
                let fav_icon_mygifs = document.getElementById("fav-icon-gc-"+(i+1));
                fav_icon_mygifs.style.display = "none";
                let trash_icon_mygifs =  document.getElementById("trash-icon-gc-"+(i+1));
                trash_icon_mygifs.style.display = "inline-block";
            } 
        }
        // OCULTAR OPCION DE VER MAS
        if(created_gifs_array.length == num_gifs_mygifs){
            see_more_button_mygifs.style.display = "none"
        }
    }else{
        mis_gifs_contain.style.display = "none";
        without_my_gifs.style.display = "block";
    }
}
//ELIMINAR LOS GIFS FUNCIONALIDAD
let delete_gifo_card_migifs = () =>{
        for(let i=gifo_contents_myGifo.length-1;i>=0;i--){
            mis_gifs_contain.removeChild(gifo_contents_myGifo[i]);
        }
        num_gifs_mygifs=0;
}
// VER MAS FUNCION
see_more_button_mygifs.addEventListener("click", () =>{
    add_my_gifo_cards();
});

// ELIMINAR UN GIFO
let removeGifo = (myGifo) =>{
    let index =  created_gifs_array.findIndex(x => x.id_trash_icon == myGifo.id);
    created_gifs_array.splice(index,1);//en la posición index eliminaremos un elemento
    for(let i=0;i<created_gifs_array.length;i++){
        created_gifs_array[i].id_dow_gif_icon =  "dow-icon-gc-"+(i+1);
        created_gifs_array[i].id_fav_gif_activate_icon = "fav-icon-act-gc-"+(i+1);
        created_gifs_array[i].id_fav_gif_icon = "fav-icon-gc-"+(i+1);
        created_gifs_array[i].id_fs_gif_icon = "full-screen-icon-gc-"+(i+1);
        created_gifs_array[i].id_gif_img= "gifo-created-"+(i+1);
        created_gifs_array[i].id_trash_icon =  "trash-icon-gc-"+(i+1);
    }
    localStorage.setItem("new_gifo",JSON.stringify(created_gifs_array));
    delete_gifo_card_migifs();
    add_my_gifo_cards();

    let check_fs = document.getElementById("show_fullView");
    check_fs.checked = false;
}