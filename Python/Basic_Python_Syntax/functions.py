# Functions are declared with the def keyword
from sqlite3 import paramstyle


parameter = "Hi this is a function"
parameter2 = "That can use multiple parameters"


def say_hi(parameter, parameter2):
    print(parameter)
    print(parameter2)


say_hi(parameter, parameter2)
