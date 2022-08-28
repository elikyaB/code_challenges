// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals (intervals) {
    let sorted = [intervals[0]]
    let sum = intervals[0][1]-intervals[0][0]
    let changed = false

    const bSort = (arr, l=0, r=1) => {
        let i = l + Math.floor((r-l)/2)
        if (arr[0] == sorted[i][0]) {
            let greater = Math.max(arr[1], sorted[i][1])
            sum += greater - sorted[i][1]
            sorted[i][1] = greater
            changed = true
        } else {
            arr[0] < sorted[i][0] ? r=i : l=i ;
            if (r-l>1) {return bSort(arr, l, r)}
            else {return splicer(arr, sorted, l, r)}
        }
    }

    const compare = (arr1, arr2) => {
        console.log(arr1, arr2)
        if (arr2===undefined) {return 'left'}
        if (arr1[0]<arr2[0] && arr1[1]<arr2[0]) {return 'left'}
        else if (arr1[0]>arr2[1] && arr1[1]>arr2[1]) {return 'right'}
        else {
            const newArr = [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])]
            sum += diff(arr2, newArr)
            changed = true
            return newArr
        }
    }

    const splicer = (arr, sorted, l, r) => {
        let overlap = compare(arr, sorted[l])
        console.log(arr, sorted, l, r, overlap)
        switch (overlap) {
            case 'left':
                sum += arr[1] - arr[0]
                changed = true
                return sorted.splice(l,0,arr)

            case 'right':
                overlap = compare(arr, sorted[r])
                if (overlap=='left' || overlap=='right') {
                    sum += arr[1] - arr[0]
                    changed = true
                }
                return overlap=='left' ? sorted.splice(r,0,arr)
                    : overlap=='right' ? sorted.splice(r+1,0,arr)
                    : sorted.splice(r,1,overlap)

            default:
                return sorted.splice(l,1,overlap)
        }
    }

    const diff = (before, after) => {
        return (after[1]-after[0]) - (before[1]-before[0])
    }

    // INITIATE LOOP
    for (let j=1; j<intervals.length; j++) {bSort(intervals[j])}
    if (sorted.length>1 && changed) {return sumIntervals(sorted)}
    else {console.log(sorted, sum)}
    return true
}

    // const test1 = [ [ 1, 5 ], [ 1, 5 ] ]
    // sumIntervals(test1)

    // const test2 = [ [ 1, 5 ], [ 5, 10 ] ]
    // sumIntervals(test2)

    // const test3 = [ [ 1, 4 ], [ 3, 6 ], [ 5, 8 ], [ 7, 10 ], [ 9, 12 ] ]
    // sumIntervals(test3)

    // const test4 = [ [ 1, 4 ], [ 7, 10 ], [ 3, 5 ] ]
    // sumIntervals(test4)

    // const test5 = [ [ 1, 20 ], [ 2, 19 ], [ 5, 15 ], [ 8, 12 ] ]
    // sumIntervals(test5)

    // const test6 = [ [ 1, 5 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ]
    // sumIntervals(test6)

    // const test7 = [ [ 1, 5 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ]
    // sumIntervals(test7)

    // const test8 = [ [ 1, 11 ], [ 10, 20 ] ]
    // sumIntervals(test8)

    // const test9 = [ [ 2, 3 ], [ 2, 6 ], [ 2, 4 ], [ 2, 9 ], [ 2, 5 ] ]
    // sumIntervals(test9)

const test10 = [ [ 3, 9 ], [ -6, -2 ], [ -2, 1 ], [ -13, -7 ] ]
sumIntervals(test10)

// const test11 = [ [ -13, -7 ], [ -6, 1 ], [ 3, 9 ] ]
// sumIntervals(test11)

// const test12 = [ [ 8, 14 ] ]
// sumIntervals(test12)

// const test13 = [ [ -10, 0 ], [ -3, 5 ], [ 3, 9 ] ]
// sumIntervals(test13)

// const test14 = [
//   [ -18, -13 ],
//   [ 8, 16 ],
//   [ 4, 5 ],
//   [ 15, 20 ],
//   [ 8, 10 ],
//   [ 0, 8 ],
//   [ -9, -1 ]
// ]
// sumIntervals(test14)

// const test15 = [
//   [ -18, -13 ],
//   [ -9, -1 ],
//   [ 0, 8 ],
//   [ 8, 10 ],
//   [ 15, 20 ],
//   [ 8, 16 ]
// ]
// sumIntervals(test15)
