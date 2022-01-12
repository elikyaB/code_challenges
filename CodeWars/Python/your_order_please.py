## https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/python
import re
def order(sentence):
    if sentence == '':
        return ''
    arr = sentence.split()
    arr.sort(key=lambda x : int(re.findall('\d',x)[0]))
    return ' '.join(arr)
    
print(order('is2 Thi1s T4est 3a'))
## need to figure out why method chaining here doesn't work > sorted() was what I was looking for