# Ternary operators can be used to reduced the length of conditionsal

def is_adult(age):
    if age >= 18:
        return True
    else:
        return False


def is_adult2(age):
    return True if age >= 18 else False


# These two functions do the same thing
print(is_adult(18))
print(is_adult2(18))
