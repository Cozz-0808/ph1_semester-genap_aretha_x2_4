let x = [
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0,
0,
0,
0
]
let y = [
0,
0,
0,
0,
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0
]
basic.forever(function () {
    for (let index = 0; index <= x.length - 1; index++) {
        led.plot(x[index], y[index])
        basic.pause(500)
        basic.clearScreen()
    }
})
