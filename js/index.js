var music = document.getElementById("music");
var audio = null;
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var offsetX = 670 / 2;
var offsetY = 625 / 2 - 55;
var together = new Date();
together.setFullYear(2016, 10, 01);
together.setHours(0);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);
loadAudio("audio/happy.mp3",audio,music);
page1.addEventListener("touchstart",function(event){
    page2.style.display = "block";
    page1.style.display = "none";
    page3.style.display = "block";
    page3.style.top = "100%";
    setTimeout(function(){
        page2.setAttribute('class','page fadeOut');
        page3.setAttribute('class','page fadeIn');

        if (!document.createElement('canvas').getContext) {
            var msg = document.createElement("div");
            msg.id = "errorMsg";
            msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
            document.body.appendChild(msg);
            $("#code").css("display", "none")
            $("#copyright").css("position", "absolute");
            $("#copyright").css("bottom", "10px");
            document.execCommand("stop");
        } else {
            setTimeout(function () {
                startHeartAnimation();
            }, 1000);

            timeElapse(together);
            setInterval(function () {
                timeElapse(together);
            }, 500);
        }
    },5000);
})