# Same concept as arrays; declared with []
names = ['Josh', 'John', 'Jake', 'Jeff', 'Johnathon']
print(names[0])

# Python can also use negative indexes which count from the end of list
print(names[-1])

# Getting a range of indices can be done in Python by returning a new list of those values
print(names[0:3])  # Excludes index 3

# Lists in Python are also objects
numbers = [1, 2, 3, 4, 5]

# Add to end of list
numbers.append(6)
print(numbers)

# Insert method adds a value at a desired index
numbers.insert(0, -1)
print(numbers)

# in keyword checks if a value is i a list
print(-1 in numbers)

# Remove method removes a desired value
numbers.remove(3)
print(numbers)

# clear method removes all elements in list
numbers.clear()
print(numbers)

# len() function returns length of a list
print(len([1, 2, 3]))
