# If an error happens within a try block, an error will be thrown to the except block

try:
    number = int(input("Enter a Number: "))
    print(number)
except:  # Except by itself will catch ANY exception, so further specification might be needed
    print("Invalid Input")

# Example of specifying different errors (THIS IS BEST PRACTICE IN PYTHON)
try:
    # 10/0
    number = int(input("Enter a Number: "))
    print(number)
except ZeroDivisionError:
    print("Divided by Zero")
except ValueError:
    print("Invalid Input")

# You can group exceptions in python with parenthesis
try:
    # 10/0
    number = int(input("Enter a Number: "))
    print(number)
except (ZeroDivisionError, ValueError) as err:
    print(err)


# errors can be stored as a variable too with the "as" keyword
# In addition, a finally block will run no matter what at the end of the last statement
try:
    # 10/0
    10/5
except ZeroDivisionError as err:
    print(err)
finally:
    print("Successful run")
