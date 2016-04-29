function showAlert(){
    var rand = Math.floor(Math.random()*5);
    document.getElementsByTagName("h2")[0].innerHTML=
    document.getElementsByTagName("li")[rand+5].innerHTML;
    document.getElementById("main").style.backgroundImage = "url(scooter"+rand+".jpg)";
}
