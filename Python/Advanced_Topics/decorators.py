# Decarators are functions that wrap around other functions
# They're useful for when you want to change the behavior of functions
#   without modifying their code

def before_after(func):
    print("before")
    func()
    print("after")

# The decorator takes the function below it as a parameter
#   or for funning same code on multiple functions


@before_after
def hello():
    print("hello")
