// Programmer: Lauryn Meyer
// Team Member: 
// Bolt ID: SB-CF6D
// Date: 4-16-2024
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700440/edit


async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}