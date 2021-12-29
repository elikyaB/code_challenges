## https://www.codewars.com/kata/546e2562b03326a88e000020/train/python
def square_digits(num):
    f = lambda n : str(int(n)**2)
    return int(''.join(map(f,list(str(num)))))

print(square_digits(81))