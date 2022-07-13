resultslist =["对","大","太大","小","太小"]
D = 0.3
# 两个数的比较结果， x 是系统随机生成的， my_num 是我猜的数
def check(x,my_num):
    result = -1

    if my_num == x: # 相等
        result = 0
    else:
        if my_num>x: # 大
            if my_num/x > 1+D: #差大于一定比例
                result = 2
            else:
                result = 1
        else:
            if my_num/x < 1-D: #差小于一定比例
                result = 4
            else: #小
                result = 3

    return result
