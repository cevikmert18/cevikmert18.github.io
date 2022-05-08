const startTime = new Date();
function comp(a,b) {
    if (a.id>b.id){
        return 1;
    }
    if(b.id>a.id){
        return -1;
    }
    return 0;
}
let score = 0;
let lastTime = 0;
let lastScore = 0;
let counter_timer = 0;
const arr = document.getElementsByTagName("path")
let cities = Array.prototype.slice.call(arr)
cities.sort(comp)
const names = []
let seenValues = []
let currentGeneratedRandom = "";

function randomNumberShower(){
    setInterval(myTimer,100);
    var currentRandom = parseInt(Math.floor(Math.random() * 81 + 1));
    while(seenValues.includes(currentRandom)){ // if this value is already in the values
        currentRandom=parseInt(Math.floor(Math.random() * 81 + 1));
    }
    var city_id = "";
    if(currentRandom==1){
        city_id="0"+currentRandom.toString();
    } else if(currentRandom==2){
        city_id="0"+currentRandom.toString();
    } else if(currentRandom==3){
        city_id="0"+currentRandom.toString();
    } else if(currentRandom==4){
        city_id="0"+currentRandom.toString();
    } else if (currentRandom==5){
        city_id="0"+currentRandom.toString();
    } else if(currentRandom==6){
        city_id="0"+currentRandom.toString();
    } else if(currentRandom==7){
        city_id="0"+currentRandom.toString();
    } else if(currentRandom==8){
        city_id="0"+currentRandom.toString();
    } else if(currentRandom==9){
        city_id="0"+currentRandom.toString();
    } else {
        city_id = currentRandom.toString();
    }
    seenValues.push(currentRandom);
    currentGeneratedRandom=city_id;
    var cityDiv = document.getElementsByClassName("city");
    var nameCity = cities[currentRandom-1].getAttribute("name");
    cityDiv[0].firstElementChild.innerText = city_id + "  " + nameCity;
}
randomNumberShower();

function loved(element){
    if(parseInt(seenValues.length)==81){
        finished();
    }
    const pathElement = element.childNodes[1]
    const pressedID = pathElement.getAttribute("id");
    const okey = checker(pressedID);
    const scorePara = document.getElementById("score_variable");
    if(okey){
        score+=1;
        scorePara.innerText="Score : " + score.toString();
        pathElement.style.fill = "#22aa22";
        randomNumberShower();
    } else {
        score-=1;
        scorePara.innerText="Score : " + score.toString();
    }
}

function checker(pressedID){
    if(currentGeneratedRandom==pressedID){
        return true;
    }
    return false;
}

function myTimer(){
    const d = new Date();
    const difference = Math.floor((d.getTime()-startTime.getTime())/1000);
    document.getElementById("elapsed_time").innerText = "Total Elapsed Time: " +difference.toString();
}

function finished(){
    if(counter_timer==0){
        counter_timer=1;
        lastScore = score+1;
        const currentTime = new Date();
        const total_elapsed_time = Math.floor((currentTime.getTime()-startTime.getTime())/1000);
        lastTime = total_elapsed_time;
    }
    document.getElementById("elapsed_time").innerText = "Total Elapsed Time: " + lastTime.toString();
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    var scoreModal = document.getElementsByClassName("modal_score")[0];
    scoreModal.innerText = "Score : "+lastScore.toString();
    var timeModal = document.getElementsByClassName("modal_time")[0];
    timeModal.innerText = "Total elapsed Time: " + lastTime.toString();
    // When the user clicks the button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}




