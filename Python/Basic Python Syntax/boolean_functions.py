# any(...) checks if any items are true; all(...) checks if all values are true
booleans = [0, True, "True", "", -1]


for boolean in booleans:
    print(bool(boolean))

print(f"\n{any(booleans)}")
print(all(booleans))
