# Similar to objects/maps in JS; comprised of key-value pairs
# declared with {}; Keys must be unique

monthConversions = {
    'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March'
}

# Dicts are iterable; default is the keys inside the object
for month in monthConversions:
    print(month, monthConversions.get(month))

# iterating over dict.items() gives you the key-value pairs
for month_pair in monthConversions.items():
    print(month_pair)

# Pairs can be retrieved with .get()
print(monthConversions.get('Dec', "Default Value if key is in the dict"))

# Dict pairs can be set or updated with .update() method or with the syntax dict[key] = value
monthConversions['Jan'] = 'October'
print(monthConversions)
# Also works with an iterable of an object
monthConversions.update({'Jan':  'January'})
print(monthConversions)
