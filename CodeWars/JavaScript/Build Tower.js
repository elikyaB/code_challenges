// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
function towerBuilder(nFloors) {
    const floorLength = 1+2*(nFloors-1)
    const tower = []
    let i = 1
    while (tower.length < nFloors) {
        let space = floorLength - i
        let floor = ""
        if (space>0) {floor = floor.concat(' '.repeat(space/2))}
        floor = floor.concat('*'.repeat(i))
        if (space>0) {floor = floor.concat(' '.repeat(space/2))}
        tower.push(floor)
        i+=2
        
    }
    return tower
}

const arr = towerBuilder(2)
console.log(arr)
