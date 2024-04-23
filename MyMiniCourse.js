// Programmer: Lauryn Meyer
// Team Member: 
// Bolt ID: SB-CF6D
// Date: 4-23-2024
// Program: My Mini Course
// Program URL: https://edu.sphero.com/program/16743353/edit


// Checkpoint 1
async function startProgram() {
	await roll(0, 70, 1)
	await delay (1);

// Checkpoint 2
	
	await roll(-90,60,2)	
	await delay (1);

// Checkpoint 3
	await roll(-180,60,1)
	await delay (1);
	await roll(90,60,1.5)
	await delay (2);

// Check Point 4
	await roll(180,60,1.5)
	await delay (1);
	await roll(-90,60,1.25)
	await delay (1);
}
