# slicing -> str = str[start:end]

from re import S


s = "hello"
s = s[0:3]
print(s)

# .strip() -> removes all trailing and leading whitespace/ given char

print("    hello      ".strip())
print("   hello   ".lstrip())  # leading whitespace only
print("   hello   ".rstrip())  # trailing whitespace only

# .replace()

print("Replace space with underscore".replace(" ", "_"))

# .split() default delimmiter is spaces
print("This sentence will be split by space".split())

# .join() turns list into string, concatenates with given char
list = "This sentence will be split by space and joined with hyphen".split()
print("-".join(list))

# .reverse() for list of chars
char_list = ['q', 'w', 'e', 'r', 't', 'y']
char_list.reverse()
print(char_list)
