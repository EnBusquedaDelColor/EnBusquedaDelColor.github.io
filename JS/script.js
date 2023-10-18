
const urlPag = "../IMG/Paginas/PagArtboard"
const cantPag = 12;

let barraTiempo = document.getElementById('barraTiempo'); //input range
let audioContainer = document.getElementById('audio-container'); //contenedor
let audio = document.getElementById('audio'); // <audio>
let playBtn = document.getElementById('playBtn'); // playBtn

function CambiarImg(num)
{
    const contenedor = document.getElementById('contenedorPag');
    //contenedor.getElementsByClassName('img-fluid')[0].attributes.src.value;

    contenedor.getElementsByClassName('img-fluid')[0].attributes.src.value= urlPag+num+'.webp';
}



function CambiarAudioTimeStamps(pag)
{
    console.log(pag)
    let nuevoTiempo= 0;
    switch(pag)
    {
        case 2:
        case 3:
        case 4:
            audio.pause();
            playBtn.src="../IMG/Recursos/IconPlay.svg"
            break;  
        case 5:
            nuevoTiempo= 3;
            break;  
            case 6:
                nuevoTiempo= 28;
            break; 
            case 7:
                nuevoTiempo= 55;
            break; 
            case 8:
                nuevoTiempo= 88;
            break; 
            case 9:
                nuevoTiempo= 110;
            break; 
            case 10:
                nuevoTiempo= 136;
            break; 
            case 11:
                nuevoTiempo= 175;
            break; 
            case 12:
                audio.pause();
                playBtn.src="../IMG/Recursos/IconPlay.svg"
                nuevoTiempo= 175;
            break; 
            case 13:
                nuevoTiempo= 190;
            break; 
            case 14:

            break; 
            case 15:

            break; 
            case 16:

            break; 
            case 17:

            break; 
            case 18:

            break; 
            case 19:

            break; 
            case 20:

            break; 
    }
    
    audio.currentTime= nuevoTiempo;
    barraTiempo.value= nuevoTiempo;
    
}

function CambiarContador(num)
{
    const contadorPagina = document.getElementById('contadorPagina');
    if((parseInt(contadorPagina.value)+ parseInt(num)>0)&&(parseInt(contadorPagina.value)+ parseInt(num)<=cantPag))
    {
        let contador =parseInt(contadorPagina.value)+ parseInt(num);
        contadorPagina.value = contador;
        CambiarImg(contador);
        CambiarAudioTimeStamps(contador);
    }
    else if (num==0)
    {
        contadorPagina.value = cantPag;
        CambiarImg(cantPag)
    }
}



////////////////////////////////////////////////////////////////////////////////////////








function PlayAudio()
{
    if(audio.paused)
    {
        audio.play();
        playBtn.src="../IMG/Recursos/IconPausa.svg"
    }
    else
    {
        audio.pause();
        playBtn.src="../IMG/Recursos/IconPlay.svg"
    }
}

function CambiarAudio()
{
    audio.currentTime=barraTiempo.value;
}

function InicializarAudio()
{
    audio.load();
    barraTiempo.max=Math.ceil(audio.duration);
    barraTiempo.value=0;
    setTimeout(function() {
        barraTiempo.max=Math.ceil(audio.duration);
    },1000);
}


let segundoActual;
let checkAudio = setInterval(function() {
        if (segundoActual != audio.currentTime) 
        {
            segundoActual = audio.currentTime;
            barraTiempo.value= Math.ceil(audio.currentTime);
        } 
        else 
        {
          
        }
        if(audio.ended)
        {
            playBtn.src="../IMG/Recursos/IconPlay.svg";
        }
    }, 62);







addEventListener("load", () => {
    InicializarAudio();
    document.getElementById("contadorPagina").addEventListener("input", (event) => CambiarContador(0));
    document.getElementById("barraTiempo").addEventListener("input", (event) => CambiarContador(0));




});



