## https://www.codewars.com/kata/513e08acc600c94f01000001/train/python
def rgb(r, g, b):
    def convert(n):
        if n<=0:
            return '00'
        elif n>=255:
            return 'FF'
        if n<10:
            n = hex(n).replace('0x', '0')
        else:
            n = hex(n).replace('0x','')
        return n.upper()
    return ''.join(list(map(convert, [r,g,b])))

print(rgb(0,0,0))
print(rgb(1,2,223))
print(rgb(255,255,255))
print(rgb(-20,275,125))