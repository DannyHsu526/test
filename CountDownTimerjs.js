var newTopic, newDate, comfirmButton, topicH1, topicDate, end, now, timer, countDownLabel,bgSelect;
var secondUnit = 1000;
var minuteUnit = secondUnit * 60;
var hourUnit = minuteUnit  * 60;
var dayUnit = hourUnit * 24;
window.onload = function showTopic(){  
    newTopic = document.getElementById("newTopic");
    newDate = document.getElementById("newDate");
    confirmButton = document.getElementById("confirmButton");
    topicDate = document.getElementById("topicDate");
    topicH1 = document.getElementById("topicH1");
    confirmButton.addEventListener("click", updateTopicAndTime);
    countDownLabel = document.getElementById("countDownLabel");
    bgSelect = document.getElementById("bgSelect");
    bgSelect.addEventListener("change",updateBackgroundImage);
}
function updateTopicAndTime(){
    topicH1.innerHTML = newTopic.value;
    topicDate.innerHTML = newDate.value;
    timer = setInterval(showRemaining,1000);
}

function showRemaining(){
    end = new Date(newDate.value);
    end.setHours(0);
    now = new Date();
    var timeDifference = end-now;
    var days=Math.floor(timeDifference/dayUnit);
    var hours=Math.floor((timeDifference%dayUnit)/hourUnit);
    var minutes=Math.floor((timeDifference%hourUnit)/minuteUnit);
    var seconds=Math.floor((timeDifference%minuteUnit)/secondUnit);
    countDownLabel.innerHTML= days+"d:"+hours+"hr:"+minutes+"m:"+seconds+"s left.";
}

function updateBackgroundImage(){
    document.getElementById("mainbody").style.backgroundImage = "url('"+bgSelect.value+".jpg')";
    
}











    
