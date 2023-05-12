input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.plot(4, input.temperature())
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    serial.writeNumber(4)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 36)
})
input.onSound(DetectedSound.Loud, function () {
    led.plot(1, 1)
})
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
