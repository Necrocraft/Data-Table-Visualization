export function createData(name, S, F, G, V, N, H, O, W) { //To create the data for rows
    return { name, S, F, G, V, N, H, O, W };
  }

export function calculateChordData(array) {
    let result = array.map((obj) => {
        return Object.values(obj).map(val => val === "" ? 0 : val).filter((val) => typeof val === "number"); 
      });

    return result;
}
    //Converting the table data to chord data by using Object.values() to get the value from key value pair
    //Map function is converting the empty string to 0 so the data for chord does not break
    //Filter is removing the string data from original object so only numerical array of data remains

export function getSumOfColumns(array) {
    let result = array.reduce((a, b) => a.map((x, i) => x + b[i]));
    return result;
}
// Getting the sum of columns


function random(min, max) {   //To create a random number in the limit given
    return Math.floor(Math.random()*(max-min+1)+min);
  }

export function generate(max, count) { //To create an array of different random numbers summing to max(here 100), count is the length of the array
    let array = [];
    let sum = 0;
    for(let i=0; i<count-1; i++) {
       array[i] = random(1, max-(count-i-1)-sum);
       sum += array[i];
    }
    array[count-1] = max - sum;
    return array;
}