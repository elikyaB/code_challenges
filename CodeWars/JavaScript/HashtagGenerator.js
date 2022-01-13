// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
function generateHashtag (str) {
    const hashtag = '#'+str.split(' ').filter((w) => {return w !== ''}).map((w) => {return w[0].toUpperCase()+w.slice(1)}).join('')
    return (hashtag.length > 140 || str.match(/\S/) === null) ? false : hashtag
}

console.log(generateHashtag('   hello    world  '))
console.log(generateHashtag('   '))

// ``` .filter((w) => {return w !== ''}) ```
// could be replaced by
// ``` w !== '' ? {map anon function} : null ```
// but I stuck with filter for readability