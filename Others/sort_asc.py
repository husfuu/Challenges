# sorting array (ascending) using selection sort algoritm

def sort_asc(array: list):
	for i in range(len(ex)):

		# current min index
		min_index = i
		
		for j in range(i+1, len(ex)):
			# check all elements, whether their small than current min index 
			if array[j] < array[min_index]:
				min_index = j

		# swap the element with current index (i) with the element with min index 
		array[i], array[min_index] = array[min_index], array[i]
	
	return array

