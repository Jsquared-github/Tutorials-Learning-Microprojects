# Annotations provide optional typing for python
# By themselves, they are ignored, but tools like mypy will chack for typing
# Syntax:
#   variables -> name: type
#   functions def name(param: type) -> type_of_return_value

def increment(n: int) -> int:
    return n + 1


count: int = increment(4)
print(count)
