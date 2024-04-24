// Programmer: Lauryn Meyer
// Team Member: Ash
// Bolt ID: SB-CF6D
// Date: 4-24-2024
// Program: Obstacle Course (prelim)
// Program URL: https://edu.sphero.com/program/16752489/edit

// Programmer 1 : Lauryn
async function startProgram() {
	await roll(0,70,2.25)	
	await delay (1);

// CheckPoint 2
// Programer 2 : Ash Cowne

	await roll((getHeading() - 70), 60, 2.5);
	await delay (1);
	await roll((getHeading() - 90), 60, 1);
	await delay (1);
}