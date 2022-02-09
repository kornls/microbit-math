function display_1 (n: number) {
    basic.showNumber(n)
    a = n
    pressed1 = 1
}
function display_2 (n: number) {
    basic.showNumber(n)
    b = n
    pressed2 = 1
}
let b = 0
let a = 0
let pressed2 = 0
let pressed1 = 0
pressed1 = 0
pressed2 = 0
while (pressed1 == 0) {
    if (input.logoIsPressed()) {
        display_1(1)
    } else if (input.buttonIsPressed(Button.A)) {
        display_1(2)
    } else if (input.buttonIsPressed(Button.B)) {
        display_1(3)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        display_1(4)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        display_1(5)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # # # # .
            # . . . #
            . # # # .
            `)
        a = 6
        pressed1 = 1
    }
}
while (pressed2 == 0) {
    if (input.logoIsPressed()) {
        display_2(1)
    } else if (input.buttonIsPressed(Button.A)) {
        display_2(2)
    } else if (input.buttonIsPressed(Button.B)) {
        display_2(3)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        display_2(4)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        display_2(5)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # # # # .
            # . . . #
            . # # # .
            `)
        b = 6
        pressed2 = 1
    }
}
basic.clearScreen()
music.playMelody("C5 G B C5 - - - - ", 500)
basic.showString("" + a + "x" + b + "=" + a * b)
