## https://www.codewars.com/kata/530e15517bc88ac656000716/train/python
def rot13(message):
    A = ord('A')
    Z = ord('Z')
    a = ord('a')
    z = ord('z')
    m = list(message)
    
    def cipher(l):
        capital = False
        if ord(l) in range(A,Z+1):
            capital = True
        if ord(l.lower()) in range(a,z+1):
            sub = ord(l.lower())+13
            if sub > z:
                sub = a + (sub-z-1)
            if capital == True:
                return chr(sub).upper()
            else:
                return chr(sub)
        else:
            return l
                
    return ''.join(list(map(cipher, m)))

rot13("Grfg")