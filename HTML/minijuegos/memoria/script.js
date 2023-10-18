///Autor: Sebastian Gabriel Morales Fonseca, 1-1932-0322
const card = {
    imgUrl : '',
    encontrado : false,
    id : '',
    pairWith: ''
}
const cards = []
var flippedCards = []
var table = document.getElementById("table")
var won=true;
function handleLoad(){
    var cont = 0;
    for(i = 0;i<8;i++)
    {
        if(i%2===0)
        {
            cont +=1
        }
        cards[i] = Object.create(card)
        cards[i].imgUrl = "imgs/"+cont+".png";
        cards[i].id=i+1
        if(i%2===0){
            cards[i].pairWith=cards[i].id+1
        }
        else{
            cards[i].pairWith=cards[i].id-1
        }
        cards[i].encontrado=false;

    }
    cards.sort(function() { return Math.random() - 0.5 });
    cards.map((cardt)=>{table.innerHTML+="<div class='containerC col-3'><div class='cart' id='card"+cardt.id+"' onclick='handleClick("+cardt.id+")'><div class='front'><p></p></div><div class='back' id='back"+cardt.id+"'><p></p></div></div></div>"})
    for(i = 0;i<8;i++)
    {
        document.getElementById("back"+cards[i].id).style.backgroundImage="url("+cards[i].imgUrl+")";
    }
}
function cardUnflip(){
    for(i=0;i<cards.length;i++)
    {
        if(!cards[i].encontrado)
        {
            document.getElementById("card"+cards[i].id).style.transform="rotateY(0deg)"
        }
    }
}

let modal = document.getElementById('ModalWin');

function Ganar()
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

function winCondition()
{
    function wonF()
    {
        //Editar lo que pasa cuando gana
        Ganar();
    }
    won=true
    for(i=0;i<cards.length;i++)
    {
        if(!cards[i].encontrado)
        {
            won=false;
        }
    }
    if(won)
    {
        setTimeout(wonF,700)
    }
}
function handleFlip(){
    if(flippedCards.length>1)
    {   
        for(i=0;i<flippedCards.length;i++)
        {
            if(flippedCards[i].pairWith===flippedCards[flippedCards.length-1].id)
            {
                cardFound(flippedCards[i].id);
                cardFound(flippedCards[flippedCards.length-1].id);
                while(flippedCards.length)
                {
                    flippedCards.pop()
                }
                winCondition();
            }
            else
            {
                setTimeout(cardUnflip,900)
                while(flippedCards.length)
                {
                    flippedCards.pop()
                }
            }
        }
    }
}
function handleClick(id){
    cardFlip(id);
}
function cardFlip(id){
    if(document.getElementById("card"+id).style.transform=="rotateY(180deg)"){
        for(i=0;i<cards.length;i++)
        {
            if(!cards[i].encontrado)
            {
                document.getElementById("card"+cards[i].id).style.transform="rotateY(0deg)"
            }
        }
    }
    else{
        document.getElementById("card"+id).style.transform="rotateY(180deg)"
        flippedCards[flippedCards.length]=getCard(id)
        
        handleFlip();
    }
}
function getCard(id)
{
    for(i=0;i<cards.length;i++)
    {
        if(cards[i].id==id)
        {
            return cards[i]
        }
    }
}
function cardFound(id){
    for(i=0;i<cards.length;i++)
    {
        if(cards[i].id==id)
        {
            cards[i].encontrado=true
        }
    }
}
let tiempo=0;
setInterval(function(){tiempo+=1;},1000);
