## https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python
import re

def disemvowel(string_):
    return re.sub("[aeiouAEIOU]","", string_)