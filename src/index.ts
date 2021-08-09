




const countingValleys = (steps: number, path: string) => {
    
    let valley = 0;
    let array = path.split('');


    let downCount = 0;
    let totalDownCount = 0;
    let upCount = 0;
    let result = 0;
    for(let i = 0; i < steps; i++)
    {


if(array[i] == 'D' && array[i + 1] == 'D')
{
    
        totalDownCount++;
        i++;
    }

      
    }

    return totalDownCount;
}


const result = countingValleys(12, 'DDUUDDUDUUUD');
console.log(result);