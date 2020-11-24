def on_received_string(receivedString):
    ssd1306.clear()
    if receivedString == "LT":
        ssd1306.write_string("Brightness: ")
        ssd1306.write_num(input.light_level())
        ssd1306.new_line()
        ssd1306.write_string("Temperature: ")
        ssd1306.write_num(input.temperature())
        ssd1306.write_string(" degrees")
    if receivedString == "TL":
        ssd1306.write_string("Temperature: ")
        ssd1306.write_num(input.temperature())
        ssd1306.write_string(" degrees")
        ssd1306.new_line()
        ssd1306.write_string("Brightness: ")
        ssd1306.write_num(input.light_level())
radio.on_received_string(on_received_string)

ssd1306.init(128, 64, DigitalPin.P0, 61)
ssd1306.clear()
radio.set_group(1)