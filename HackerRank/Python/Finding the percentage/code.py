if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    
    for name in student_marks:
        if name == query_name:
            sum_score = 0
            for score in student_marks[name]:
                sum_score += score
            
            result = format(sum_score/len(student_marks[name]), '.2f')
            print(result)
            