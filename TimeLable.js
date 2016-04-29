
var count, currentImageNumber, timeLabel;

function labelStyle(locationX, locationY, fontSize, color, rotateAngle){
    this.locationX=locationX;
    this.locationY=locationY;
    this.fontSize=fontSize;
    this.color=color;
    this.rotateAngle=rotateAngle;
};

var labelStyle0=new labelStyle("15.4em","7.4em","60px","darkred",30);
var labelStyle1=new labelStyle("1.7em","6.8em","80px","red",-9);
var labelStyle2=new labelStyle("2.5em","1.6em","80px","brown",0);
var labelStyle3=new labelStyle("3em","1.6em","75px","green",-20);
var labelStyle4=new labelStyle("0.5em","1.6em","80px","brown",0);

var labelStyleArray=[labelStyle0,labelStyle1,labelStyle2,labelStyle3,labelStyle4];

window.onload=function(){
    timeLabel=document.getElementById("timeLabel");
    setInterval(changeBGImage,5000); 
    setInterval(updateTimeLabel,1000);
    count=0;
}
function addZero(timeString){
    timeString="0"+timeString;
    return timeString.slice(-2);
}


function updateTimeLabel(){
    var now = new Date();
    timeLabel.innerHTML=addZero(now.getHours())+":"+addZero(now.getMinutes())+":"+
        addZero(now.getSeconds());
}
function changeBGImage(){
    currentImageNumber = count%5;
    count++;
    document.getElementById("main").style.backgroundImage="url('time" + currentImageNumber + ".jpg')";
    timeLabel.style.visibility="visible";
    timeLabel.style.left = labelStyleArray[currentImageNumber].locationX;
    timeLabel.style.top=labelStyleArray[currentImageNumber].locationY;
    timeLabel.style.fontSize=labelStyleArray[currentImageNumber].fontSize;
    timeLabel.style.color=labelStyleArray[currentImageNumber].color;
    timeLabel.style.transform = "rotate("+labelStyleArray[currentImageNumber].rotateAngle+"deg)";
}
