document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(){
    console.log("https://docs.google.com/document/u/0/?tgif=d");
    location.href = "https://docs.google.com/document/u/0/?tgif=d";
    window.open("https://docs.google.com/document/u/0/?tgif=d");
};

document.getElementById("myButton2").addEventListener("click", myFunction2);

function myFunction2(){
    console.log("https://docs.google.com/presentation/u/0/?tgif=d");
    location.href = "https://docs.google.com/presentation/u/0/?tgif=d";
    window.open("https://docs.google.com/presentation/u/0/?tgif=d");
};