# Importing libraries
import math
import numpy as np
from scipy import linalg

# (a) Use of methods: floor, ceil, sqrt, gcd
x = 15.7

print("Floor of x:", math.floor(x))
print("Ceil of x:", math.ceil(x))
print("Square root of 16:", math.sqrt(16))
print("GCD of 60 and 48:", math.gcd(60, 48))

# (b) Array attributes and functions
arr = np.array([[1, 2, 3], [4, 5, 6]])

print("\nArray:\n", arr)
print("Dimensions:", arr.ndim)
print("Shape:", arr.shape)
print("Size:", arr.size)

# Sum and Mean
print("Sum of all elements:", np.sum(arr))
print("Mean of all elements:", np.mean(arr))

# Sort
unsorted_array = np.array([3, 1, 4, 2])
print("Sorted array:", np.sort(unsorted_array))

# Sign function
signed_array = np.array([-5, 0, 6])
print("Sign of elements:", np.sign(signed_array))

# (c) Generate matrices using numpy
zero_matrix = np.zeros((2, 2))
ones_matrix = np.ones((3, 3))
identity_matrix = np.eye(3)

print("\nZero Matrix:\n", zero_matrix)
print("Ones Matrix:\n", ones_matrix)
print("Identity Matrix:\n", identity_matrix)

# (d) Finding determinant using scipy
matrix = np.array([[4, 2], [3, 1]])
det = linalg.det(matrix)
print("\nDeterminant of matrix:\n", det)

# (e) Find Eigenvalues and Eigenvectors using scipy
eigenvalues, eigenvectors = linalg.eig(matrix)
print("Eigenvalues:", eigenvalues)
print("Eigenvectors:\n", eigenvectors)
