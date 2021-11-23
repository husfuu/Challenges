# solution

# algorithm
# 1) create a new scores list with descending
# 2) create unix_scores list
# 3) get item from index 1 to get the second maximum value in unix_score list


def findRunnerUp(scores):
	# create new scores list with descending
	for i in range(len(scores)):
		max_index = i

		for j in range(i+1, len(scores)):
			if scores[j] > scores[max_index]:
				max_index = j

		# swap the element with the current index (i) with the element with min index
		scores[i], scores[max_index] = scores[max_index], scores[i]

	
	# create unix_scores list
	unix_scores = []
	for score in scores:
		if score not in unix_scores: 
			unix_scores.append(score)

	# return the runner up
	return unix_scores[1]



scores = [2, 3, 6, 6, 5]

print(findRunnerUp(scores))
