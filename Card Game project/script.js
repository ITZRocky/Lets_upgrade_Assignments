let cards = [
    {
        image:"images/strange.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"images/strange.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"images/blackpanther.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"images/blackpanther.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"images/ironman.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"images/ironman.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"images/captainmarvel.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"images/captainmarvel.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"images/spiderman.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"images/spiderman.jpg",
        value:5,
        status:"closed"
    },
]

//durnsten shuffling algorithm

for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString = "";

    data.forEach(function(card,index) {
        cardsString+=`
        
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})"></div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML =cardsString;
}

displayCards(cards);


let cardCount=1,score=0;
let val1=null,val2=null;
function openCard(index){

    console.log(cards);

        cards[index].status="opened";
        if(cardCount===1){
            val1=cards[index].value;
            cardCount++;

        }
        else if(cardCount===2){
            val2=cards[index].value;

            if(val1===val2){
                score++;
                document.getElementById('score').innerText=score;

                val1=null;
                val2=null;
                cardCount=1;
            }
            else{
                    alert("game over");
                    location.reload();
            }
        }
        displayCards(cards);

}