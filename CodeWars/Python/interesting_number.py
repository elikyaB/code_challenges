## https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/python
def is_interesting(n, arr):
    def test (n):
        n = str(n)
        if len(n)>2 and (
            int(n[1:]) == 0 or
            n in '1234567890 9876543210' or
            n == n[::-1] or
            int(n) in arr
        ): return True
        
    if test(n): return 2
    elif test(n+1) or test(n+2): return 1
    else: return 0