# Declared with [] and appending lists inside or with [[]]
number_grid = []

for row in range(3):
    number_grid.append([1, 2, 3])

print(number_grid)

number_grid2 = [[], [], []]

for i in range(3):
    number_grid2[i] = [1, 2, 3]

print(number_grid2)
