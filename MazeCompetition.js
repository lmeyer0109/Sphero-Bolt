// Programmer: Lauryn Meyer
// Team Member: Ash Cowne
// Bolt ID: SB-CF6D
// Date: 4-30-2024
// Program: Maze Competition Course
// Program URL:https://edu.sphero.com/program/16788336/edit

async function startProgram() {
	
	// Programmer: Ash Cowne - Start Text & Audio Checkpoint Commit - Date:4.30.2024

 
	await scrollMatrixText('Start!', { r: 66, g: 56, b: 255 }, 90, true)
	await delay(1)
	await speak("Start", true);
	// Programmer: Lauryn Meyer - Blue LED Checkpoint Commit - Date:

	await roll((getHeading() + 0), 75, 2.25);
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 100 });

	// Programer: Ash Cowne  - Sound One Checkpoint Commit - Date: 5.1.2024
	await roll((getHeading() + 90), 75,1.4);
	await delay(1);
	await Sound.Effects.Fairy.play()
	
	// Programmer: Lauryn Meyer - Red LED Checkpoint Commit - Date: 5.1.2024
	await roll((getHeading() + 90), 75,1);
	await delay(1);
	await roll((getHeading() + 40),75,1);
	await delay(.5);
	setMainLed({ r: 100, g: 0, b: 0 });
	
	// Programmer: ____ - Sound Two Checkpoint Commit - Date:



	// Programmer: ____ - Green LED Checkpoint Commit - Date:



	// Programmer: ____ - Purple LED & Sound Three Checkpoint Commit - Date:



	// Programmer: ____ - Finish Text & Audio Checkpoint Commit - Date:
}



