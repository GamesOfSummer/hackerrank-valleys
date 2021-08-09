var countingValleys = function (steps, path) {
    var valley = 0;
    var array = path.split('');
    var downCount = 0;
    var totalDownCount = 0;
    var upCount = 0;
    var result = 0;
    for (var i = 0; i < steps; i++) {
        if (array[i] == 'D') {
            downCount++;
            if (downCount == 2) {
                totalDownCount++;
                downCount = 2;
            }
        }
    }
    return totalDownCount;
};
var result = countingValleys(12, 'DDUUDDUDUUUD');
console.log(result);
