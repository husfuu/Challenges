# another solution

# algorithm
# 1) create unix_scores list from scores
# 2) remove maximum value in unix_scores list
# 3) get the maximum value in the new unix_scores

def findRunnerUp(scores):
	# remove duplicate item
	unix_scores = []
	for score in scores:
		if score not in unix_scores: 
			unix_scores.append(score)

	# remove maximum value
	unix_scores.remove(max(unix_scores))

	# return maximu value in new unix_scores
	return max(unix_scores)


scores = [2, 3, 6, 6, 5]
print(findRunnerUp(scores))