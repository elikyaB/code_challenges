import re
def pig_it(text):
    def swap(w):
        if re.search('\W', w) == None:
            return w[1:] + str(list(w).pop(0))+'ay'
        return w
    return ' '.join(list(map(swap, text.split(' '))))
    
print(pig_it('hi fly guy !'))

# better answer
# def pig_it(text):
#     return ' '.join(w[1:]+w[0]+'ay' if w.isalpha() else w for w in text.split(' '))