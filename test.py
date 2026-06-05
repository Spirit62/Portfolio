for i in range(1, 5):
    for j in range(1, i+1):
        print("*", end="")
    print()

for i in range(1,11):
    for j in range(1, 11):
        print(f"{i}*{j}={i*j}", end="\t")
    print()

for i in range(1,6):
    for j in range(1, i+1):
        print(f"{j}", end="")
    print()