'''
Classes are declared with the class keyword. The first argument 
    passed into a Constructor/Instance method represents the
    instance of the current object. It's convention to call this argument "self"
'''


class Dog:
    # Constructors use the __init__ method
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return "Woof!"


finn = Dog("Finn", 8)


'''
Inheritance is done in Python by doing => class name(name_of_class_to_inherit_from):
'''


class Animal:
    def walk(self):
        return "Walking..."


class Cat(Animal):
    def meow(self):
        return "Meow!"


biscuit = Cat()
