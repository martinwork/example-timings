/**
 * Times in microseconds
 * 
 * With micro:bit V2
 * 
 * empty loop = 0.57 
 * 
 * loop + show image = 40.2
 * 
 * loop + analog read = 29
 * 
 * loop + digital read = 2.5
 * 
 * loop + running time = 4.9
 * 
 * loop + while analog = 29.2
 * 
 * loop + while digital= 2.7
 * 
 * With micro:bit V1
 * 
 * empty loop = 2.8
 * 
 * loop + show image = 242
 * 
 * loop + analog read = 83.2
 * 
 * loop + digital read = 9.9
 * 
 * loop + running time = 17.1
 * 
 * loop + while analog = 84.4
 * 
 * loop + while digital= 10.8
 */
let digitalPin = DigitalPin.P0
let analogPin = AnalogPin.P0
let before = input.runningTimeMicros()
for (let index = 0; index < 1000; index++) {
	
}
let after = input.runningTimeMicros()
let time = after - before
basic.clearScreen()
basic.showNumber(time / 1000)
