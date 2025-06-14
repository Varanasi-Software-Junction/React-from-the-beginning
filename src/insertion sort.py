a = [5,4,3,2,1,0]
n = len(a)
jloopcount, iloopcount = 0, 0
print(a)
for i in range(0, n-1):
    iloopcount += 1

    if a[i] <= a[i+1]:
        continue
    print(a[i], a[i+1])
    t = a[i+1]
    j = i+1
    while j >= 1 and a[j-1] > t:
        jloopcount += 1
        a[j] = a[j-1]
        j -= 1

    a[j] = t
    print(a)
print("Sorted ", a, ", iloop count=", iloopcount, "jloopcount=", jloopcount)
