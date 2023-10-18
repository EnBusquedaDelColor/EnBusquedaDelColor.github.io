var diferencias = []
var cantidad
function cargarJuego(numJuego){
    var idA
    var idB
    document.getElementById('containerGame').innerHTML+='<div class="contenedorImg"><div id="img1J'+numJuego+'"></div><div id="img2J'+numJuego+'"></div></div>'
    
    numJuego===1||numJuego===2? cantidad = 5 : cantidad=6
    
    for(i=0;i<cantidad;i++)
    {
        diferencias[diferencias.length]=i+1
        idA = 'dif'+(i+1)+'A'
        document.getElementById('img1J'+numJuego).innerHTML+='<div class="difJ'+numJuego+''+(i+1)+'" id="'+idA+'" onclick="findDif('+idA+')"></div>'
        idB = 'dif'+(i+1)+'B'
        document.getElementById('img2J'+numJuego).innerHTML+='<div class="difJ'+numJuego+''+(i+1)+'" id="'+idB+'" onclick="findDif('+idB+')"></div>'
    }
    document.getElementById('cantidadDiferencias').innerHTML=(cantidad- diferencias.length)+'/'+cantidad
}
let modal = document.getElementById('ModalWin');

function winGame()
{
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
function findDif(id){
    if(id.id!='null'){
        var idOpposite = ''
        idOpposite = id.id
        if(idOpposite.endsWith('A'))
            idOpposite=idOpposite.replace('A','B')
        else if(idOpposite.endsWith('B'))
            idOpposite=idOpposite.replace('B','A')
        document.getElementById(idOpposite).style.border='solid'
        id.style.border='solid'
        
        document.getElementById('cantidadDiferencias').innerHTML=(cantidad-diferencias.length+1)+'/'+cantidad
        if(diferencias.length<=0)
            winGame()
        else
        {
            diferencias.pop()
            id.id='null'
            if(diferencias.length<=0)
            winGame()
        }
    }
}
let tiempo=0;
setInterval(function(){tiempo+=1;},1000);