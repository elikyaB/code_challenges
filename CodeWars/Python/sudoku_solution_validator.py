## https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/python
import math
def valid_solution(board):
    col = [0,0,0,0,0,0,0,0,0]
    blk = [[0,0,0],[0,0,0],[0,0,0]]
    chk = lambda a: a==45
    for y in range(9):
        if sum(board[y]) == 45:
            for x in range(9):
                col[x] += board[y][x]
                blk[math.floor(y/3)][math.floor(x/3)] += board[y][x]
        else: return False
    for i in range(3):
        if False in list(map(chk, blk[i])): return False
    return all(list(map(chk, col)))

board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

print(valid_solution(board))