
//Initialize Game (on html page load)
document.addEventListener('DOMContentLoaded', function(){
   //Define Variables
    var wins = 0;
   
    var losses = 0;

    var targetScore = 19 + Math.floor(Math.random() * 101);
    document.getElementById("targetScore").textContent = targetScore;  

    var userScore = 0;
    document.getElementById("userScore").textContent = userScore;  

    var c1 = Math.floor(Math.random() * 20);
    console.log("gem value" + c1);
    var c2 = Math.floor(Math.random() * 20);
    console.log("gem value" + c2);
    var c3 = Math.floor(Math.random() * 20);
    console.log("gem value" + c3);
    var c4 = Math.floor(Math.random() * 20);
    console.log("gem value" + c4);
    var c5 = Math.floor(Math.random() * 20);
    console.log("gem value" + c5);
    var c6 = Math.floor(Math.random() * 20);
    console.log("gem value" + c6);

    //Add click events for each crystal individual click
    $("#crystal_1").on("click", function(){
        userScore = userScore + c1;
        console.log("user Score: " + userScore);
        document.getElementById("userScore").textContent = userScore;  
    });
    $("#crystal_2").on("click", function(){
        userScore = userScore + c2;
        console.log("user Score: " + userScore);
        document.getElementById("userScore").textContent = userScore;  
    });
    $("#crystal_3").on("click", function(){
        userScore = userScore + c3;
        console.log("user Score: " + userScore);
        document.getElementById("userScore").textContent = userScore;  
    });
    $("#crystal_4").on("click", function(){
        userScore = userScore + c4;
        console.log("user Score: " + userScore);
        document.getElementById("userScore").textContent = userScore;  
    });
    $("#crystal_5").on("click", function(){
        userScore = userScore + c5;
        console.log("user Score: " + userScore);
        document.getElementById("userScore").textContent = userScore;  
    });
    $("#crystal_6").on("click", function(){
        userScore = userScore + c6;
        console.log("user Score: " + userScore);
        document.getElementById("userScore").textContent = userScore;  
    });

    //Define reset function (variables back to beginning)
   function resetVar(){
    targetScore = 19 + Math.floor(Math.random() * 101);
    document.getElementById("targetScore").textContent = targetScore;  

    userScore = 0;
    document.getElementById("userScore").textContent = userScore;  

    c1 = Math.floor(Math.random() * 20);
    console.log("gem value" + c1);
    c2 = Math.floor(Math.random() * 20);
    console.log("gem value" + c2);
    c3 = Math.floor(Math.random() * 20);
    console.log("gem value" + c3);
    c4 = Math.floor(Math.random() * 20);
    console.log("gem value" + c4);
    c5 = Math.floor(Math.random() * 20);
    console.log("gem value" + c5);
    c6 = Math.floor(Math.random() * 20);
    console.log("gem value" + c6);
   }

    //Add win/lose conditions
    $(document).on("click", function(){
        if(userScore > targetScore){
            losses = losses + 1;
            document.getElementById("losses").textContent = losses;
            console.log("NUMBER OF LOSSES" + losses)
            alert("Sorry, try again!");
            resetVar();
        }
        else if(userScore === targetScore){
            wins = wins + 1;
            document.getElementById("wins").textContent = wins;
            console.log(wins);
            alert("Nicely Done!");
            resetVar();
        }
    });    
    
    //Apply variable changes to html doc
    document.getElementById("targetScore").innerHTML = targetScore;
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
});

   

