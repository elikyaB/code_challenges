// ttps://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
function dirReduc(arr){
    const compass = {"NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST"}
    let result = [], i=0, removed=false
    while (i<arr.length) {
        console.log(arr[i], i)
        if (arr[i+1]==compass[arr[i]]) {removed=true; i+=2}
        else {result.push(arr[i]); i++}
    }
    console.log(result)
    return removed ? dirReduc(result) : result
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])