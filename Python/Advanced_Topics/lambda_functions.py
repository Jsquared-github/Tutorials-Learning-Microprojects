# Lambda/ Anonymous functions are single expression functions
# They are defined with lambda keyword and declared with the
#    structure => lambda input: output

add = lambda a, b: a + b
multiply = lambda a, b: a * b
power = lambda a, b: a**b

print(add(2, 3))
print(multiply(5, 5))
print(power(10, 2))
