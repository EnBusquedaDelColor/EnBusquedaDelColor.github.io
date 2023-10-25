const sopa = ["P","J","C","Y","H","D","R","S","R","M","M","C","T","O","B","U","B","B","I","P","Y","A","C","I","C","O","M","J","A","S","B","C","R","V","N","O","C","E","E","R","E","O","A","D","A","T","D","A","D","M","R","O","R","R","W","S","E","R","S","A","U","O","X","U","D","X","I","C","I","I","L","R","G","O","C","U","A","J","O","L","E","S","I","N","L","A","M","C","A","R","O","R","N","C","G","O","Z","E","L","L","A","N","P","M","E","P","R","U","N","N","B","L","N","E","E","H","R","A","N","A","J"]
const palabras = ["Barro","Cardumen","Rana","Cocodrilo","Siseo","Mar","Coral","Murice","Lora","Humedal","Tinte","Boruca","BocaSierpe","Vasija"];
const palabrasL = ["Murice","Lora","Humedal","Tinte","Boruca","Boca Sierpe","Vasija"];
const palabrasR = ["Barro","Cardumen","Rana","Cocodrilo","Siseo","Mar","Coral"];
var mouseState = false;
var ids=[];
function handleMouseDown(){
    mouseState=true
}

let modal = document.getElementById('ModalWin');
let ganado=false;

function Ganar()
{
    ganado=true;
    let tiempoFinal="0", minutos="minuto";
    if (Math.floor(tiempo/60)>0)
    {
        if (Math.floor(tiempo/60)>1) {minutos= "minutos";}
        tiempoFinal= (Math.floor(tiempo/60))+" "+minutos+" con "+(tiempo%60)+" segundos";
    }
    else
    {
        tiempoFinal= (tiempo%60)+" segundos"
    }
    document.getElementById('tiempo').innerText= tiempoFinal;
    modal.style.display="grid";
    $('#ModalWin').animate({opacity:1},'slow')
}

function handleMouseUp(){
    mouseState=false
    palabraEncontrada(ids)
    vaciar()
    if(palabras.length===0&&!ganado){
        Ganar();
    }
}
function handleTouchEnd() {
    palabraEncontrada(ids)
    vaciar()
    if(palabras.length===0&&!ganado){
        Ganar();
    }
}
function handleLoad(){
    var tabla = document.getElementById("sopaLetras");
    var palabrasRE = document.getElementById("palabrasR");
    var palabrasLE = document.getElementById("palabrasL");
    var innerHTMLL=""
    var innerHTMLRE=""
    var innerHTMLLE=""
    for(var i =0;i<sopa.length;i++)
    {
        if(i%11==0){    
            innerHTMLL+="<tr class='tRow'>"
            for(var j =i;j<i+11;j++)
            {
                innerHTMLL+="<td class='tElement' ontouchmove='hoverTouch(event)' onmousemove='hover("+sopa[j]+j+")' id='"+sopa[j]+j+"'>"+sopa[j]+"</td>"
            }
            innerHTMLL+="</tr>"
        }
    }
    
    var cells = document.getElementsByTagName('td');
    for(var i = 0;i<palabrasL.length;i++)
    {
        innerHTMLLE+="<span id='"+palabrasL[i].toLowerCase().trim().replace(" ", "")+"'>"+palabrasL[i]+"</span>"
    }
    for(var i = 0;i<palabrasR.length;i++)
    {
        innerHTMLRE+="<span id='"+palabrasR[i].toLowerCase().trim()+"'>"+palabrasR[i]+"</span>"
    }
    palabrasLE.innerHTML=innerHTMLLE;
    palabrasRE.innerHTML=innerHTMLRE;
    tabla.innerHTML=innerHTMLL;
}
var letrasObtenidas=""
function vaciar(){
    var elements = document.getElementsByClassName("tElement");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#b7a179";
    }
    while (ids.length) {
        ids.pop();
    }
    letrasObtenidas = "";
}
function simplifyPalabra() 
{    
    var palabra=""
    for(i = 0; i<letrasObtenidas.length;i++){
        var a1=letrasObtenidas.charAt(i);
        var a2=letrasObtenidas.charAt(i+1);
        if(a1===a2)
        {
            if(palabra.endsWith(letrasObtenidas.toString().charAt(i))){
                continue
            }
            else
                palabra+=letrasObtenidas.toString().charAt(i)
        }
    }
    if(palabra.toString().trim().toLowerCase()=="baro")
    {
        palabra="barro"
    }
    return palabra
}
function palabraEncontrada(idLetra){
    const dataArr = new Set(idLetra);
    let result = [...dataArr];
    var palabra = simplifyPalabra()
    for(i=0;i<palabras.length;i++)
    {
        if(palabra.toString().trim().toUpperCase()==palabras[i].toString().trim().toUpperCase())
        {
            if(result.length==palabras[i].toString().length)
            {
                var color = "hsl("+Math.floor((Math.random()*360))+",100%,60%)"
                document.getElementById(palabra.toLowerCase().trim()).style.textDecoration="line-through";
                document.getElementById(palabra.toLowerCase().trim()).style.color=color;
                for(j=0;j<result.length;j++)
                {
                    document.getElementById(result[j]).className="selected"
                    document.getElementById(result[j]).style.backgroundColor=color
                    for (let l = 0; l < palabras.length; l++) {
                        if (palabras[l].toString().trim().toUpperCase() === palabra.toString().trim().toUpperCase()) {
                            palabras.splice(l, 1);
                        }
                    }
                }   
            }
        }
    }
}
function hoverTouch(id){
    var x = id.touches[0].pageX
    var y = id.touches[0].pageY
    var elements = document.getElementsByTagName("td")
    for(i=0;i<elements.length;i++)
    {
        var boundaries = elements[i].getBoundingClientRect();
        if(x>boundaries.x&&x<(boundaries.left+boundaries.width)){
            if(y>boundaries.top&&y<(boundaries.top+boundaries.height))
            {
                if(elements[i].className!="selected"){
                    elements[i].style.backgroundColor = "#837049b9"
                }
                
                letrasObtenidas += elements[i].innerHTML;
                ids[ids.length] = elements[i].id;
            }
        }
    }
}
function hover(id) {
    if (mouseState) {
        letrasObtenidas+=id.innerText
        ids[ids.length]=id.id 
        if(id.className!="selected"){
            id.style.backgroundColor="#837049b9"
        }
    
    } else {
        var elements = document.getElementsByClassName("tElement");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#b7a179";
        }
        while (ids.length) {
            ids.pop();
        }
        letrasObtenidas = "";
    }
}
let tiempo=0;
setInterval(function(){tiempo+=1;},1000);
