# sorting array (ascending) using selection sort algoritm

def sort_desc(array: list):
	for i in range(len(ex)):

		# current max index
		max_index = i
		
		for j in range(i+1, len(ex)):
			# check all elements, whether their small than current min index 
			if array[j] < array[max_index]:
				max_index = j

		# swap the element with current index (i) with the element with min index 
		array[i], array[max_index] = array[max_index], array[i]
	
	return array



ex = [1,2,3,9,8,4]

print(sort_desc(ex))
