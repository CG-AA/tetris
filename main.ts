let x = 2;
let y = 0;
let move_place = 0;

input.onButtonPressed(Button.A, function () {
    move_place = -1;
});

input.onButtonPressed(Button.B, function () {
    move_place = 1;
});

function move(){
    if(move_place == 0){
        return;
    } else if (move_place + x > 0 && move_place + x < 4){
        
    } 
    move_place = 0;
}

basic.forever(function () {
    led.unplot(x, y);
    y++;
    if (y > 4) {
        y = 0;
        x = Math.floor(Math.random() * 5);
    }
    led.plot(x, y);
    basic.pause(1000);
});