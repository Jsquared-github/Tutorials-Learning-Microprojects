# Sets are similar to tuples, but are mutable and not ordered
# Sets are also similar to dictionaries, but don't have keys
# Sets cannot have duplicate values
set1 = {'Roger', 'Syd', 'Josh', 'Sid'}
set2 = {'Roger', 'Sid'}

# intersection of sets
print(set1 & set2)

# union of sets
print(set1 | set2)

# difference between sets
print(set1 - set2, set2 - set1)

# < >  checks for super or subsets of sets
print(set1 > set2, set2 < set1)
