# Range object stores a sequence of numbers from start to end excluding the end -> range(1,5) = 1,2,3,4
# Default start is 0
numbers = range(5)
print(numbers)  # Must iterate over range object to get individual number values

for num in numbers:
    print(num)

# Step parameter can be used to augment how much each step increments
numbers2 = range(5, 10, 2)
for num in numbers2:
    print(num)

# Typically range() is used in the for loop
for num in range(5):
    print(num)
