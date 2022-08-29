// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals (intervals, previous=[]) {
    let sorted = [intervals[0]]
    let sum = intervals[0][1]-intervals[0][0]

    // HELPERS
    const binarySort = (arr, l=0, r=sorted.length-1) => {
        let i = l + Math.floor((r-l)/2)
        if (arr[0] == sorted[i][0]) {
            let greater = Math.max(arr[1], sorted[i][1])
            sum += greater - sorted[i][1]
            sorted[i][1] = greater
        } else {
            arr[0] < sorted[i][0] ? r=i : l=i ;
            if (r-l>1) {return binarySort(arr, l, r)}
            else {return splicer(arr, sorted, l, r)}
        }
    }

    const splicer = (arr, sorted, l, r) => {
        let overlap = compare(arr, sorted[l])
        // console.log(arr, sorted, l, r, overlap)
        switch (overlap) {
            case 'left':
                sum += arr[1] - arr[0]
                return sorted.splice(l,0,arr)

            case 'right':
                overlap = compare(arr, sorted[r])
                if (overlap=='left' || overlap=='right') {sum += arr[1] - arr[0]}
                return overlap=='left' ? sorted.splice(r,0,arr)
                    : overlap=='right' ? sorted.splice(r+1,0,arr)
                    : sorted.splice(r,1,overlap)

            default:
                return sorted.splice(l,1,overlap)
        }
    }

    const compare = (arr1, arr2) => {
        // console.log(arr1, arr2)
        if (arr2===undefined) {return 'left'}
        if (arr1[0]<arr2[0] && arr1[1]<arr2[0]) {return 'left'}
        else if (arr1[0]>arr2[1] && arr1[1]>arr2[1]) {return 'right'}
        else {
            const newArr = [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])]
            sum += diff(arr2, newArr)
            return newArr
        }
    }

    const diff = (before, after) => {
        return (after[1]-after[0]) - (before[1]-before[0])
    }

    // INITIATE LOOP
    for (let j=1; j<intervals.length; j++) {binarySort(intervals[j])}
    if (sorted.length>1 && sorted.length !== previous.length) {
        return sumIntervals(sorted, sorted)
    } else {console.log(sorted, sum)}
    return sum
}

function testArray (n, range=[-100,100]) {
    let result = []
    let absRange = range[1]-range[0]
    for (let i=0; i<n; i++) {
        const randN = () => Math.round(Math.random()*absRange)
        let a = range[0] + randN(), b = range[0] + Math.round(randN())
        result.push([Math.min(a,b), Math.max(a,b)])
    }

    console.log(result)
    return result
}

sumIntervals(testArray(3))