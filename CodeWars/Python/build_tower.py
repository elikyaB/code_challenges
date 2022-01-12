## https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/python
def tower_builder(n_floors):
    tower = []
    floor_length = 1 + 2*(n_floors-1)
    i = 1
    while len(tower) < n_floors:
        space = (floor_length - i)/2
        floor = ""
        if space > 0:
            for x in range(int(space)):
                floor += ' '
        for x in range(i):
            floor += "*"
        if space > 0:
            for x in range(int(space)):
                floor += ' '
        tower.append(floor)
        i+=2
    return tower

arr = tower_builder(3)
print(arr)