f1=open("tem.py","r")
f2=open("ftemp.py","w")
for i in f1:
    ft=int(i)*1.8+32
    f2.write(str(ft)+"\n")
f2=open("ftemp.py","r")
r=f2.read()
for i in r:
    print(r)
    break