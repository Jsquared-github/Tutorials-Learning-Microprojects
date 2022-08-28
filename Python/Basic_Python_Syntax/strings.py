# Strings in Python are immutable

course = 'Python for Beginners'

# .upper() creates new string
print(course.upper())
print(course)

# .find gets first instance of the parameter
print(course.find("y"))
print(course.find("for"))

# .replace() returns new string
print(course.replace('for', '4'))

# in operator checks for an occurance in a string; returns boolean
print("Python" in course)
