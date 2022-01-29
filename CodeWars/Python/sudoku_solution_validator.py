## https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/python
import math

def valid_solution(board):
    col = [[0],[0],[0],[0],[0],[0],[0],[0],[0]]
    blk = [[0,0,0],[0,0,0],[0,0,0]]
    for y in range(9):
        if sum(board[y]) == 45:
            for x in range(9):
                col[x] += board[y][x]
                blk[math.floor(y/3)][math.floor(x/3)] += board[y][x]
                
            
## [[0,0,0],[0,0,0],[0,0,0]]