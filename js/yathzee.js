const stenen = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅" ]; // de dobbelstenen
let dice1, dice2, dice3, dice4, dice5; // random cijfer gekozen
let d1hold, d2hold, d3hold, d4hold, d5hold= false; // houd de dubbelsteen
let ScoreAces, ScoreTwos, ScoreThrees, ScoreFours, ScoreFives, ScoreSixes, ScoreTOK, ScoreFOK, ScoreHouse, ScoreSm, ScoreLg, ScoreY, ScoreC = false; // houd de score 
let VastAces, VastTwos, VastThrees, VastFours, VastFives, VastSixes, VastTOK, VastFOK, VastHouse, VastSm, VastLg, VastY, VastC = 0 // returned de score


// dobbelstenen vasthouden
document.getElementById("d1hold").onclick = function() {
    d1hold = !d1hold; // toggle true/false
    if (d1hold) {
        document.getElementById("d1hold").innerText = "unhold";
      } else {
        document.getElementById("d1hold").innerText = "hold";
    }

}

document.getElementById("d2hold").onclick = function() {
    d2hold = !d2hold; // toggle true/false
    if (d2hold) {
        document.getElementById("d2hold").innerText = "unhold";
      } else {
        document.getElementById("d2hold").innerText = "hold";
    }

}

document.getElementById("d3hold").onclick = function() {
    d3hold = !d3hold; // toggle true/false
    if (d3hold) {
        document.getElementById("d3hold").innerText = "unhold";
      } else {
        document.getElementById("d3hold").innerText = "hold";
    }

}

document.getElementById("d4hold").onclick = function() {
    d4hold = !d4hold; // toggle true/false
    if (d4hold) {
        document.getElementById("d4hold").innerText = "unhold";
      } else {
        document.getElementById("d4hold").innerText = "hold";
    }

}

document.getElementById("d5hold").onclick = function() {
    d5hold = !d5hold; // toggle true/false
    if (d5hold) {
        document.getElementById("d5hold").innerText = "unhold";
      } else {
        document.getElementById("d5hold").innerText = "hold";
    }

}



  
// dobbelstenen rollen
document.getElementById("roll").onclick = function(){
   if (!d1hold) {
    dice1 = Math.floor(Math.random() * 6);
    document.getElementById("dice1").innerHTML = stenen[dice1];
   } 
   if (!d2hold) {
    dice2 = Math.floor(Math.random() * 6);
    document.getElementById("dice2").innerHTML = stenen[dice2];
   } 
   if (!d3hold) {
    dice3 = Math.floor(Math.random() * 6);
    document.getElementById("dice3").innerHTML = stenen[dice3];
   } 
   if (!d4hold) {
    dice4 = Math.floor(Math.random() * 6);
    document.getElementById("dice4").innerHTML = stenen[dice4];
   } 
   if (!d5hold) {
    dice5 = Math.floor(Math.random() * 6);
    document.getElementById("dice5").innerHTML = stenen[dice5];
   } 
 
     

    // functions aan roepen 
    
    document.getElementById("aces").innerHTML = "Aces: " + aces();
    
    document.getElementById("twos").innerHTML = "twos: " + twos();
    
    document.getElementById("threes").innerHTML = "threes: " + threes();
    
    document.getElementById("fours").innerHTML = "fours: " + fours();
    
    document.getElementById("fives").innerHTML = "fives: " + fives();
  
    document.getElementById("sixes").innerHTML = "sixes: " + sixes();
   
    document.getElementById("totalScore").innerHTML = "total score: " + totalScore();
    
    document.getElementById("bonus").innerHTML = "bonus: " + bonus()
  
    document.getElementById("total").innerHTML = "total: " + total();
    
    document.getElementById("TOK").innerHTML = "three of a kind: " + TOK();
   
    document.getElementById("FOK").innerHTML = "four of a kind: " + FOK();
   
    document.getElementById("house").innerHTML = "full house: " + house();
    
    document.getElementById("sm").innerHTML = "small straight:  " + sm();
    
    document.getElementById("lg").innerHTML = "lg straight:  " + lg();
    
    document.getElementById("yahtzee").innerHTML = "Yahtzee:  " + y();
    
    document.getElementById("c").innerHTML = "chance: " + c();

    document.getElementById("total1").innerHTML = " upper total: " + total();

    document.getElementById("lower").innerHTML = " lower total: " + lower();

    document.getElementById("all").innerHTML = "grand total: " + gt();

}

// score van aces vast houden
document.getElementById("aces").onclick = function(){
    VastAces = aces(); 
    ScoreAces = true;
    document.getElementById("aces").style.backgroundColor = "#a0ffb7";
}

// score van aces op tellen
function aces(){
    let score = 0;
    if (!ScoreAces) {
        if (dice1 == 0) score += 1;
        if (dice2 == 0) score += 1;
        if (dice3 == 0) score += 1;
        if (dice4 == 0) score += 1;
        if (dice5 == 0) score += 1;
        return score;
    } else{
    return VastAces;
    }
}

// score van twos vast houden
document.getElementById("twos").onclick = function(){
    VastTwos = twos(); 
    ScoreTwos = true;
    document.getElementById("twos").style.backgroundColor = "#a0ffb7";
}

// score van twos op tellen
function twos(){
    let score = 0;
    if (!ScoreTwos) {
        if (dice1 == 1) score += 2;
        if (dice2 == 1) score += 2;
        if (dice3 == 1) score += 2;
        if (dice4 == 1) score += 2;
        if (dice5 == 1) score += 2;
        return score;
    } else{
    return VastTwos;
    }
}

// score van threes vast houden
document.getElementById("threes").onclick = function(){
    VastThrees = threes(); 
    ScoreThrees = true;
    document.getElementById("threes").style.backgroundColor = "#a0ffb7";
}

// score van threes op tellen
function threes(){
    let score = 0;
    if (!ScoreThrees) {
        if (dice1 == 2) score += 3;
        if (dice2 == 2) score += 3;
        if (dice3 == 2) score += 3;
        if (dice4 == 2) score += 3;
        if (dice5 == 2) score += 3;
        return score;
    } else{
    return VastThrees;
    }
}

// score van fours vast houden
document.getElementById("fours").onclick = function(){
    VastFours = fours(); 
    ScoreFours = true;
    document.getElementById("fours").style.backgroundColor = "#a0ffb7";
}

// score van fours op tellen
function fours(){
    let score = 0;
    if (!ScoreFours) {
        if (dice1 == 3) score += 4;
        if (dice2 == 3) score += 4;
        if (dice3 == 3) score += 4;
        if (dice4 == 3) score += 4;
        if (dice5 == 3) score += 4;
        return score;
    } else{
    return VastFours;
    }
}

// score van fives vast houden
document.getElementById("fives").onclick = function(){
    VastFives = fives(); 
    ScoreFives = true;
    document.getElementById("fives").style.backgroundColor = "#a0ffb7";
}

// score van fours op tellen
function fives(){
    let score = 0;
    if (!ScoreFives) {
        if (dice1 == 4) score += 5;
        if (dice2 == 4) score += 5;
        if (dice3 == 4) score += 5;
        if (dice4 == 4) score += 5;
        if (dice5 == 4) score += 5;
        return score;
    } else{
    return VastFives;
    }
}

// score van sixes vast houden
document.getElementById("sixes").onclick = function(){
    VastSixes = sixes(); 
    ScoreSixes = true;
    document.getElementById("sixes").style.backgroundColor = "#a0ffb7";
}

// score van sixes op tellen
function sixes(){
    let score = 0;
    if (!ScoreSixes) {
        if (dice1 == 5) score += 6;
        if (dice2 == 5) score += 6;
        if (dice3 == 5) score += 6;
        if (dice4 == 5) score += 6;
        if (dice5 == 5) score += 6;
        return score;
    } else{
    return VastSixes;
    }
}
 
// score voor upper
function totalScore(){
 let score = 0;
 score = VastAces + VastTwos + VastThrees +VastFours + VastFives + VastSixes;
 return score;
}

// controle of je bonus hebt
function bonus(){
    let score = 0;
    if(totalScore() >= 63){
        score = 35;
    }
    return score
}

//het berekenen van het totale upper
function total(){
    let score = 0;
    score = bonus() + totalScore();
    return score;
}

// score van TOK vast houden
document.getElementById("TOK").onclick = function(){
    VastTOK = TOK(); 
    ScoreTOK = true;
    document.getElementById("TOK").style.backgroundColor = "#a0ffb7";
}

// three of a kind
function TOK(){
    let score = 0;
    let dice = [dice1,dice2,dice3,dice4,dice5];
    let count = [0,0,0,0,0,0];

    // kijken hoe vaak een cijfer voor komt
    if (!ScoreTOK) {
       for( let i = 0; i < 6; i++){
       count[dice[i]]++;
    }
        // berekenen
        for (let i = 0; i < count.length; i++) {
            if (count[i] >= 3) {
                score = dice1 + dice2 + dice3 +dice4 + dice5 + 6;
                return score; 
            }
        }
        return score;
    } else{
    return VastTOK;
    } 
} 

// score van FOK vast houden
document.getElementById("FOK").onclick = function(){
    VastFOK = FOK(); 
    ScoreFOK = true;
    document.getElementById("FOK").style.backgroundColor = "#a0ffb7";
}

// four of a kind
function FOK(){
    let score = 0;
    let dice = [dice1,dice2,dice3,dice4,dice5];
    let count = [0,0,0,0,0,0];

    // kijken hoe vaak een cijfer voor komt
    if (!ScoreFOK) {
       for( let i = 0; i < 6; i++){
       count[dice[i]]++;
    }
        // berekenen
        for (let i = 0; i < count.length; i++) {
            if (count[i] >= 4) {
                score = dice1 + dice2 + dice3 +dice4 + dice5 +  6;
                return score; 
            }
        }
        return score;
    } else{
    return VastFOK;
    }
} 

// score van house vast houden
document.getElementById("house").onclick = function(){
    VastHouse = house(); 
    ScoreHouse = true;
    document.getElementById("house").style.backgroundColor = "#a0ffb7";
}

// house
function house(){
    let score = 0;
    let dice = [dice1,dice2,dice3,dice4,dice5];
    let count = [0,0,0,0,0,0];
    let drie = false;
    let twee = false;

    // kijken hoe vaak een cijfer voor komt
    if (!ScoreHouse) {
       for( let i = 0; i < 6; i++){
       count[dice[i]]++;
    }
        // berekenen
        for (let i = 0; i < count.length; i++) {
            if (count[i] == 3) {
                 drie = true;
            }
        }
        
        for (let i = 0; i < count.length; i++){
            if(count[i] == 2)
                twee = true;
        }

        //controllen
        if(drie && twee){
        score = 25;
        }
        return score;
    } else{
    return VastHouse;
    } 
} 

// score van sm vast houden
document.getElementById("sm").onclick = function(){
    VastSm = sm(); 
    ScoreSm = true;
    document.getElementById("sm").style.backgroundColor = "#a0ffb7";
}

// sm
function sm(){
    let score = 0;
    let dice = [dice1,dice2,dice3,dice4,dice5];
    let een, twee, drie, vier, vijf, zes = false

   
    if (!ScoreSm) {
        // kijken welke dobbelstenen aanwezig zijn
       for( let i = 0; i < 6; i++){
        if(dice[i] == 0){
            een = true;
        }

        for( let i = 0; i < 6; i++){
            if(dice[i] == 1){
                twee = true;
            }
        }
        
        for( let i = 0; i < 6; i++){
            if(dice[i] == 2){
                drie = true;
            }
        }
        for( let i = 0; i < 6; i++){
            if(dice[i] == 3){
                vier = true;
            }
        }
    
        for( let i = 0; i < 6; i++){
            if(dice[i] == 4){
               vijf = true;
            }
        }
            
        for( let i = 0; i < 6; i++){
            if(dice[i] == 5){
               zes = true;
            }
        }

        //controle
        if ((een && twee && drie && vier) ||
        (twee && drie && vier && vijf) ||
        (drie && vier && vijf && zes)) {
        score = 30;
    }

    return score;
    }
    } else{
    return VastSm;
    }
} 

// score van lg vast houden
document.getElementById("lg").onclick = function(){
    VastLg = lg(); 
    ScoreLg = true;
    document.getElementById("lg").style.backgroundColor = "#a0ffb7";
}

// sm
function lg(){
    let score = 0;
    let dice = [dice1,dice2,dice3,dice4,dice5];
    let een, twee, drie, vier, vijf, zes = false

   
    if (!ScoreLg) {
        // kijken welke dobbelstenen aanwezig zijn
       for( let i = 0; i < 6; i++){
        if(dice[i] == 0){
            een = true;
        }

        for( let i = 0; i < 6; i++){
            if(dice[i] == 1){
                twee = true;
            }
        }
        
        for( let i = 0; i < 6; i++){
            if(dice[i] == 2){
                drie = true;
            }
        }
        for( let i = 0; i < 6; i++){
            if(dice[i] == 3){
                vier = true;
            }
        }
    
        for( let i = 0; i < 6; i++){
            if(dice[i] == 4){
               vijf = true;
            }
        }
            
        for( let i = 0; i < 6; i++){
            if(dice[i] == 5){
               zes = true;
            }
        }

        //controle
        if ((een && twee && drie && vier && vijf) ||
        (twee && drie && vier && vijf && zes) ) {
        score = 40;
    }

    return score;
    }
     
    } else{
    return VastLg;
    }
      
} 

// score van yahtzee vast houden
document.getElementById("yahtzee").onclick = function(){
    VastY = y(); 
    ScoreY = true;
    document.getElementById("yahtzee").style.backgroundColor = "#a0ffb7";

}

// yahtzee
function y(){
    let score = 0;
    let dice = [dice1,dice2,dice3,dice4,dice5];
    let count = [0,0,0,0,0,0];

    // kijken hoe vaak een cijfer voor komt
    if (!ScoreY) {
       for( let i = 0; i < 6; i++){
       count[dice[i]]++;
    }
        // berekenen
        for (let i = 0; i < count.length; i++) {
            if (count[i] >= 5) {
                score = 50;
                return score; 
            }
        }
    
        return score;
    
    } else{
    return VastY;
    }
}

// score van chance vast houden
document.getElementById("c").onclick = function(){
    VastC = c(); 
    ScoreC = true;
    document.getElementById("c").style.backgroundColor = "#a0ffb7";
}

function c(){
    let score;

    if (!ScoreC) {
        score = dice1 + dice2 + dice3 +dice4 + dice5 + 6;
         return score;
     
     } else{
     return VastC;
     }
}

function lower(){
    let score = 0;
    score = VastTOK + VastFOK + VastHouse + VastSm + VastLg + VastY + VastC;
    return score;
 }

 function gt(){
    let score = 0;
    score = total() + TOK() + FOK() + house() + sm() + lg() + y() + c();
    return score;
   }

