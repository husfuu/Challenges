if __name__ == '__main__':
    n = int(input())
    res = []
    
    for i in range(n):
        res.append(str(i+1))
    res = ''.join(res)
    
    print(res)