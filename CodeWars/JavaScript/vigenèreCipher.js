// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript

function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      
    };
    this.decode = function (str) {
      //...
    };
}

function test (str) {
    let arr = []
    key = 'password'
    let keyIndex
    let i = 0
    let a = 'a'.charCodeAt()
    let z = 'z'.charCodeAt()
    let alphabet = z-a
    console.log(a,z)
    for (l of str) {
        keyIndex = i<key.length ? i : key.length%i
        let cipher = l.charCodeAt()+key[keyIndex].charCodeAt()
        if (cipher>=z) {cipher = a + z % cipher}
        arr.push(cipher)
        console.log(cipher,String.fromCharCode(cipher))
        i++
    }
    return String.fromCharCode(...arr)
}

console.log(test('codewars'))
