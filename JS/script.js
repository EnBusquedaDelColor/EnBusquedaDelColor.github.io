
const urlPag = "../IMG/Paginas/PagArtboard"
const cantPag = 40;

let barraTiempo = document.getElementById('barraTiempo'); //input range
let audioContainer = document.getElementById('audio-container'); //contenedor
let audio = document.getElementById('audio'); // <audio>
let playBtn = document.getElementById('playBtn'); // playBtn
const contadorPagina = document.getElementById('contadorPagina');

function CambiarImg(num)
{
    const contenedor = document.getElementById('contenedorPag');
    //contenedor.getElementsByClassName('img-fluid')[0].attributes.src.value;

    contenedor.getElementsByClassName('img-fluid')[0].attributes.src.value= urlPag+num+'.webp';
}



function CambiarAudioTimeStamps(pag)
{
    let nuevoTiempo= 0;
    switch(pag)
    {
        case 2:
        case 3:
        case 4:
            audio.pause();
            playBtn.src="../IMG/Recursos/IconPlay.svg"
            break;  
        case 5: nuevoTiempo= 3;break;  
        case 6: nuevoTiempo= 28;break; 
        case 7: nuevoTiempo= 55;break; 
        case 8: nuevoTiempo= 88;break; 
        case 9: nuevoTiempo= 110;break; 
        case 10: nuevoTiempo= 136;break; 
        case 11: nuevoTiempo= 175;break; 
        case 12:
                audio.pause();
                playBtn.src="../IMG/Recursos/IconPlay.svg";
                nuevoTiempo= 175;
            break; 
        case 13: nuevoTiempo= 190;break; 
        case 14: nuevoTiempo= 209.3;break; 
        case 15: nuevoTiempo= 227;break; 
        case 16: nuevoTiempo= 253;break; 
        case 17: nuevoTiempo= 285.6;break; 
        case 18: nuevoTiempo= 320;break; 
        case 19: nuevoTiempo= 352;break; 
        case 20: 
            audio.pause();
            playBtn.src="../IMG/Recursos/IconPlay.svg";
            nuevoTiempo= 352;
            break; 
        case 21: nuevoTiempo= 381.2;break; 
        case 22: nuevoTiempo= 401;break; 
        case 23: 
            audio.pause();
            playBtn.src="../IMG/Recursos/IconPlay.svg";
            nuevoTiempo= 401;
            break; 
        case 24: nuevoTiempo= 415;break; 
        case 25: nuevoTiempo= 442;break; 
        case 26: nuevoTiempo= 463.4;break; 
        case 27: nuevoTiempo= 485.5;break; 
        case 28: nuevoTiempo= 510.5;break; 
        case 29: nuevoTiempo= 531;break; 
        case 30: nuevoTiempo= 560;break; 
        case 31: nuevoTiempo= 585;break; 
        case 32: nuevoTiempo= 610;break; 
        case 33: nuevoTiempo= 630;break; 
        case 34: nuevoTiempo= 651;break; 
        case 35: nuevoTiempo= 678;break; 
        case 36: 
        case 37: 
        case 38: 
        case 39: 
        case 40: 
        case 41: nuevoTiempo= 703;break; 
    }
    
    audio.currentTime= nuevoTiempo;
    barraTiempo.value= nuevoTiempo;
    
}

function CambiarPagTimeStamps()
{
    let pag=1;
    if (barraTiempo.value<3) pag=1;
    else if (barraTiempo.value<28) pag=5;
    else if (barraTiempo.value<55) pag=6;
    else if (barraTiempo.value<88) pag=7;
    else if (barraTiempo.value<110) pag=8;
    else if (barraTiempo.value<136) pag=9;
    else if (barraTiempo.value<175) pag=10;
    else if (barraTiempo.value<190) pag=11;
    else if (barraTiempo.value<209.3) pag=13;
    else if (barraTiempo.value<227) pag=14;
    else if (barraTiempo.value<253) pag=15;
    else if (barraTiempo.value<285.6) pag=16;
    else if (barraTiempo.value<320) pag=17;
    else if (barraTiempo.value<352) pag=18;
    else if (barraTiempo.value<381.2) pag=19;
    else if (barraTiempo.value<401) pag=21;
    else if (barraTiempo.value<415) pag=22;
    else if (barraTiempo.value<442) pag=24;
    else if (barraTiempo.value<463.4) pag=25;
    else if (barraTiempo.value<485.5) pag=26;
    else if (barraTiempo.value<510.5) pag=27;
    else if (barraTiempo.value<531) pag=28;
    else if (barraTiempo.value<560) pag=29;
    else if (barraTiempo.value<585) pag=30;
    else if (barraTiempo.value<610) pag=31;
    else if (barraTiempo.value<630) pag=32;
    else if (barraTiempo.value<651) pag=33;
    else if (barraTiempo.value<678) pag=34;
    else if (barraTiempo.value<703) pag=35;
    else pag=36;


    return pag;
}

function CambiarContador(num)
{
    
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
function CambioBarra()
{
    const contadorPagina = document.getElementById('contadorPagina');
    let pag= CambiarPagTimeStamps();
    contadorPagina.value= pag;
    CambiarImg(pag);
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
            let pagAct=CambiarPagTimeStamps();
            if (pagAct!=contadorPagina.value)
            { 
                contadorPagina.value=pagAct;
                CambiarImg(pagAct);
            }
           
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
    document.getElementById("barraTiempo").addEventListener("input", (event) => CambioBarra());




});



