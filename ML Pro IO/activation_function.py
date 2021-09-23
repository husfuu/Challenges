import numpy as np

def predict(h_ouput, weights, activation):
	"""
	h_ouput: output from previous hidden layer
	weights: weights of the current layer
	activation: type of activation function
	v_k: k neuron's output from dot product of h_ouput and weights
	h_output2 : output from the current layer
	"""
	v_k = np.dot(h_ouput, weights)
	if activation == "relu":	
		h_ouput2 = np.maximum(v_k, 0)

	elif activation == "sigmoid":
		h_ouput2 = 1/(1+np.exp(-v_k))

	elif activation == "tanh":
		h_ouput2 = (np.exp(v_k)-np.exp(-v_k)) / (np.exp(v_k)+np.exp(-v_k))

	elif activation == "relu_leaky":
		h_ouput2 = np.maximum(0.00001*v_k, v_k)

	return h_ouput2

h_ouput = [1, 2, 5]
weights = [8, 9, 7]

print(predict(h_ouput, weights, "relu_leaky"))
print(predict(h_ouput, weights, "relu"))