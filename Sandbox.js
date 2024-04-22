// Programmer: Lauryn Meyer
// Team Member: 
// Bolt ID: SB-CF6D
// Date: 4-16-2024
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700440/edit

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);



async function startProgram() {
	setMainLed({ r: 100, g: 75, b: 79 });
	await speak("Hello Lauryn", true);
	await delay(1);
	for (var helloSquare = 0; helloSquare < 4; helloSquare++) {
		setMainLed(getRandomColor());
		await Sound.Effects.Fairy.play(true);
		await roll((getHeading() + 90), 60, 1);
		await delay(1);

	}

}

*/
async function startProgram() {
	await roll(0, 40, 2)
	await 2
	await roll(-180, 40, 2)
}