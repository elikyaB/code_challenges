// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript

function VigenèreCipher(key, abc) {
    let dict = {}; [].map.call(abc, (l, i)=>{dict[l] = i})
    console.log(dict)
    this.encode = (str) => cipher(1, str)
    this.decode = (str) => cipher(-1, str)
    function cipher (dir, str) {
        return [].map.call(str, (l, i)=>{
            return isNaN(dict[l]) ? l : abc[(abc.length + dict[l] + dict[key[i % key.length]] * dir) % abc.length]
        }).join('')
    }
}

const str = new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz')
console.log(str.encode('codewars'))
console.log(str.decode('laxxhsj'))