import numpy as np
import math

def predict(h_ouput, weights, activation):
	"""
	h_ouput: output from previous hidden layer
	weights: weights of current layer
	activation: type of activation function
	v_k: k neuron's output from dot product of h_ouput and weights
	"""
	v_k = np.dot(h_ouput, weights)
	if activation == "relu":	
		h_ouput2 = np.max(v_k, 0)

	elif activation == "sigmoid":
		h_ouput2 = 1/(1+math.exp(-v_k))

	elif activation == "tanh":
		h_ouput2 = (math.exp(v_k)-math.exp(-v_k)) / (math.exp(v_k)+math.exp(-v_k))

	elif activation == "relu_leaky":
		h_ouput2 = np.max(0.00001*v_k, v_k)

	return h_ouput2

h_ouput = [1, 2, 5]
weights = [8, 9, 7]

print(predict(h_ouput, weights, "relu"))