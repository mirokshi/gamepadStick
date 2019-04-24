
var ball;

window.addEventListener("gamepadconnected", function(e) {

    ball = document.getElementById("ball");
    ball.style.backgroundColor = "green";
    document.getElementsByTagName("p")[0].innerHTML = e.gamepad.id;
    updateLoop();

});

function updateLoop() {

    var gp = navigator.getGamepads()[0];
    var left = (gp.axes[0] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
    var right = (gp.axes[1] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

    ball.style.left = left + "px";
    ball.style.top =  right + "px";

    if (gp.buttons[0].pressed) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

    requestAnimationFrame(updateLoop);

}