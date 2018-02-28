document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px"});

document.getElementById("shrinkBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "75px"});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "Blue"});

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0"});

document.getElementById("unfBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "1"});    

document.getElementById("resetBtn").addEventListener("click", function(){
    
    document.getElementById("box").style.height = "150px"});

document.getElementById("resetBtn").addEventListener("click", function(){
    
    document.getElementById("box").style.backgroundColor = "Orange"});

document.getElementById("resetBtn").addEventListener("click", function(){
    
    document.getElementById("box").style.opacity = "1"});