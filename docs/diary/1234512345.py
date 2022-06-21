def add(a,b):
	c = a+b
	return(c)
a=3489
he = 0
while a<=96327:
	he=add(he,a)
	a=a+1
print(he)

x=9
y=123+2
print(y)

print("python3 ff1.py")
print("feifei317 print python3")
print("print python3 li cd ff1.py ")
print("cd 桌面 ")
print("python3")
print("cat")

++y
print(++y)
print(++y)
print(++y)# y=y+1




a=3
sum=0
while a <10000000:
	sum=sum+a
	a=a+2

print(sum)

https://so.ooopic.com/search-b6c1cae9bddacad6b3adb1a820cafab0e6-0-______ooo__.html





















import random

my_number = random.randint(1,100)

def getinput():
    try:
        num = eval(input("number:"))
    except:
        print("请重新输入数字")
        num = getinput()
    return num
def ffpycom(a,b):
    c = range(a,b)
    return c

pdc=0
for l in ffpycom(1,11):
    list1=[]
    list1.append(l)
    for i in range(1,11):
        you_input = getinput()

        if you_input==my_number:
            pdc=1
            print("对")
            break
        else:
            if you_input>my_number:
                if you_input-20>my_number:
                    print("太大")
                else:
                    print("大")
            else:
                if you_input+20<my_number:
                    print("太小")
                else:
                    print("小")
    if pdc==1:
        print("你胜利了!")
        print("你猜了",i,"次")
    else:
        print("你失败了")
        print("你猜了",i,"次")
