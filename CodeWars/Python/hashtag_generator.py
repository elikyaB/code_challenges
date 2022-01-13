## https://www.codewars.com/kata/52449b062fb80683ec000024/train/python
def generate_hashtag(s):
    return '#'+s.strip().title().replace(' ', '') if len(s)<=140 and s.strip() != '' else False
    
print(generate_hashtag('   hello    world  '))
print(generate_hashtag('     '))
