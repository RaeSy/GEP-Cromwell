function validateAnswer(){
    let x = document.forms["1stanswer"]["ans"].value;
    if(x === "coins"){
        return true;

    }
    else{
        document.getElementById("incorrect1").innerHTML = "Incorrect";
        return false;
    }

}

function validateAnswer2(){
    let x = document.forms["2ndanswer"]["ans"].value;
    if(x === "Chantry"){
        return true;
    }
    else{
        document.getElementById("incorrect2").innerHTML = "Incorrect";
        return false;
    }
}

function validateAnswer3(){
    let x = document.forms["3rdanswer"]["ans"].value;
    if(x === "our lady"){
        return true;
    }
    else{
        document.getElementById("incorrect3").innerHTML = "Incorrect";
        return false;
    }
}

function validateAnswer4(){
    let x = document.forms["4thanswer"]["ans"].value;
    if(x === "Rose Gillman"){
        return true;
    }
    else{
        document.getElementById("incorrect4").innerHTML = "Incorrect";
        return false;
    }
}

function validateAnswer5(){
    let x = document.forms["5thanswer"]["ans"].value;
    if(x === "US-93"){
        return true;
    }
    else{
        document.getElementById("incorrect5").innerHTML = "Incorrect";
        return false;
    }
}

function validateAnswer6(){
    let x = document.forms["6thanswer"]["ans"].value;
    if(x === "white pine public museum"){
        return true;
    }
    else{
        document.getElementById("incorrect6").innerHTML = "Incorrect";
        return false;
    }
}

function validateAnswer7(){
    let x = document.forms["7thanswer"]["ans"].value;
    if(x === "AR"){
        return true;
    }
    else{
        document.getElementById("incorrect7").innerHTML = "Incorrect";
        return false;
    }
}

function validateAnswer8(){
    let x = document.forms["8thanswer"]["ans"].value;
    if(x === "surveyors transit"){
        return true;
    }
    else{
        document.getElementById("incorrect8").innerHTML = "Incorrect";
        return false;
    }
}

function validateAnswer9(){
    let x = document.forms["9thanswer"]["ans"].value;
    if(x === "steptoe park"){
        return true;
    }
    else{
        document.getElementById("incorrect9").innerHTML = "Incorrect";
        return false;
    }
}

function validateAnswer10(){
    let x = document.forms["10thanswer"]["ans"].value;
    if(x === "Cambridge City Airport"){
        return true;
    }
    else{
        document.getElementById("incorrect10").innerHTML = "Incorrect";
        return false;
    }
}

function hint1(){
        document.getElementById('hint1').innerText = "Hint: Check the website's visit us section";
}

function hint2(){
        document.getElementById('hint2').innerText = "Hint: The King's Arms. Click again for another hint.";
        document.getElementById('hint2').addEventListener('click', function(){
            document.getElementById('hint2').innerText = "Hint: Follow the colour to find the answer. Click again for a final hint";
            document.getElementById('hint2').addEventListener('click', function(){
                document.getElementById('hint2').innerText = "Hint: The colour is not the answer";
            });
        }); 
}
function hint3(){
    document.getElementById('hint3').innerText = "Hint: It is in Paris";
}

function hint4(){
    document.getElementById('hint4').innerText = "Hint: Check our the facts section on her website. Click again for another hint.";
    document.getElementById('hint4').addEventListener('click', function(){
        document.getElementById('hint4').innerText = "Hint: The city is Strasbourg. Click again for a final hint";
        document.getElementById('hint4').addEventListener('click', function(){
            document.getElementById('hint4').innerText = "Hint: Canal de Bouche";
        });
    }); 
}

function hint5(){
    document.getElementById('hint5').innerText = "Hint: Nevada, USA."; 
}

function hint6(){
    document.getElementById('hint6').innerText = "Hint: The answer is 4 words"; 
}

function hint7(){
    document.getElementById('hint7').innerText = "Hint: The coins don't exist"; 
}

function hint8(){
    document.getElementById('hint8').innerText = "Hint: white pine public museum. Click again for another hint"; 
    document.getElementById('hint8').addEventListener('click', function(){
        document.getElementById('hint8').innerText = "Hint: check the website's gallery";
    })
}

function hint9(){
    document.getElementById('hint9').innerText = "Hint: Go down 13th street"; 
}

function hint10(){
    document.getElementById('hint10').innerText = "Hint: Marshall Airport"; 
}