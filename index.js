const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((ac,v)=>ac+=v,0)

// print(totalBatteries)