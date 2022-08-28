# Indentation matters in Python and distinquishes blocks of code

temperature = 19

if temperature > 30:
    print("It's a hot day")
    print("Drink plenty of water")
elif temperature > 20:
    print("Today is a nice day")
elif temperature > 10:
    print("It's a bit cold")
else:
    print("Today is a cold day")
    print("Be sure to cover up")

weight = input("Weight: ")
unit = input("(K)g or (L)bs: ")
if unit.upper() == "L":
    print(f"Weight in Kgs: {float(weight)/2.2}")
elif unit.upper() == "K":
    print(f"Weight in Lbs: {float(weight) * 2.2}")
