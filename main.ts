let strip = neopixel.create(DigitalPin.P8, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (BitCar.linesensor(IRLineSensor.left)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        BitCar.linefollow(25)
    } else {
        BitCar.move(100, 100)
        strip.showRainbow(1, 360)
    }
})
