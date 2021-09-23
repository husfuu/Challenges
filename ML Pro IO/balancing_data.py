def compensate_imbalance(data):
    result = []
    unix_count = dict()

    for i in data:
        if i not in unix_count.keys():
            unix_count[i] = 0
        if i in unix_count.keys():
            unix_count[i] += 1

    for i in unix_count:
        result.append(unix_count[i]/len(data))

    return result



print(compensate_imbalance([1, 1, 1, 2]))