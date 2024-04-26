// Programmer: Lauryn Meyer
// Team Member: Ash
// Bolt ID: SB-CF6D
// Date: 4-24-2024
// Program: Obstacle Course (prelim)
// Program URL: https://edu.sphero.com/program/16752489/edit

/*
// Programmer 1 : Lauryn Meyer
async function startProgram() {
	await roll(0,70,2.25)	
	await delay (1);

//CheckPoint 2
// Programer 2 : Ash Cowne

	await roll((getHeading() - 70), 60, 2.5);
	await delay (1);
	await roll((getHeading() - 90), 60, 1);
	await delay (1);

// Checkpoint 3
// Programmer 1 : Lauryn Meyer
	
	await roll(-200,60,1)
	await delay (1);
	await roll(70,60,.5)
	await delay (1);
}

*/


async function startProgram() {
	// Lauryn Meyer - PC #28 - Checkpoint 1 - Pink
setMainLed({ r: 255, g: 192, b:203 });
await roll(0,75,2);
await delay (.5);
	await Sound.Effects.Fairy.play()


	// Lauryn Meyer - PC #28 - Checkpoint 2 - Purple
setMainLed({ r: 160, g: 32, b:240 });
await roll(+115,85,2)
await delay (.5);
	await Sound.Effects.Fairy.play()


	// Lauryn Meyer - PC #28 - Checkpoint 3 - Sound / Pink
setMainLed({ r: 205, g: 192, b:203 });
await roll(-45,85,2)
await delay (.5);
	await Sound.Effects.Fairy.play()
	


}
