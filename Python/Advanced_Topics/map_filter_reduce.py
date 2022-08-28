from functools import reduce
# map(), filter(), reduce()
numbers = [1, 2, 3]

# The map() function iterates and does an operation through an iterable
#   and creates a map object comprised of the outputs
result = map(lambda a: 2 * a, numbers)
print(list(result))

# filter() takes an iterable and returns a filter object
#   The object is comprised of outputs that return True for
#   a certain criteria
result = filter(lambda n: n % 2 == 1, numbers)
print(list(result))

# reduce() calculates a value from a sequence; must be imported from functools standard library
sum = reduce(lambda a, b: a + b, numbers)
print(sum)
