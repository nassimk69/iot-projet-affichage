radio.onReceivedString(function on_received_string(receivedString: string) {
    ssd1306.clear()
    if (receivedString == "LT") {
        ssd1306.writeString("Brightness: ")
        ssd1306.writeNum(input.lightLevel())
        ssd1306.newLine()
        ssd1306.writeString("Temperature: ")
        ssd1306.writeNum(input.temperature())
        ssd1306.writeString(" degrees")
    }
    
    if (receivedString == "TL") {
        ssd1306.writeString("Temperature: ")
        ssd1306.writeNum(input.temperature())
        ssd1306.writeString(" degrees")
        ssd1306.newLine()
        ssd1306.writeString("Brightness: ")
        ssd1306.writeNum(input.lightLevel())
    }
    
})
ssd1306.init(128, 64, DigitalPin.P0, 61)
ssd1306.clear()
radio.setGroup(1)
