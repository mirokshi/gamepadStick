
var balls = new Array();

window.addEventListener("gamepadconnected", function(e) {
    let gp_index = e.gamepad.index+1;
    let ball = document.getElementById("ball-"+gp_index)
    console.log('NOU JUGADOR',e.gamepad)
    balls.push(ball);
    document.getElementsByTagName("p").innerHTML = e.gamepad.id;
    updateLoop();
});

function updateLoop() {
    for(let i = 0; i < navigator.getGamepads().length; i++){
        if(navigator.getGamepads()[i] != null){
            var left = (navigator.getGamepads()[i].axes[0] + 1) / 2 * (window.innerWidth - balls[navigator.getGamepads()[i].index].offsetWidth);
            var right = (navigator.getGamepads()[i].axes[1] + 1) / 2 * (window.innerHeight - balls[navigator.getGamepads()[i].index].offsetHeight);

            balls[navigator.getGamepads()[i].index].style.left = left + "px";
            balls[navigator.getGamepads()[i].index].style.top =  right + "px";

            if (navigator.getGamepads()[i].buttons[0].pressed) {
                document.body.style.backgroundColor = "red";
            } else {
                document.body.style.backgroundColor = "white";
            }
        }

        requestAnimationFrame(updateLoop);
    };

}