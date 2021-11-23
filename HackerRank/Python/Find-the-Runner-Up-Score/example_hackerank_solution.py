# hackerank solution

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    for i in range(len(arr)):
        max_index = i

        for j in range(i+1, len(arr)):
            if arr[j] > arr[max_index]:
                max_index = j

        # swap the element with the current index (i) with the element with min index
        arr[i], arr[max_index] = arr[max_index], arr[i]


    # remove duplicate item
    unix_scores = []
    for item_arr in arr:
        if item_arr not in unix_scores: 
            unix_scores.append(item_arr)

    # return the runner up
    print(unix_scores[1])
