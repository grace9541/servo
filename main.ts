basic.forever(function () {
    pins.servoWritePin(AnalogPin.P9, 20)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P9, 100)
    basic.pause(1000)
})
