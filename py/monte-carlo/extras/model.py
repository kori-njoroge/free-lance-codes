import numpy as np
from sklearn.ensemble import RandomForestRegressor

# Define the number of simulations and the number of passengers
n_simulations = 10000
n_passengers = 4

# Define the possible values for each passenger's wait time
wait_times = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Generate the data for the training set
X_train = np.random.choice(wait_times, size=(n_simulations, n_passengers))

# Define the function to calculate the total wait time
def total_wait_time(wait_times):
    return sum(wait_times)

# Calculate the y values for the training set
y_train = np.apply_along_axis(total_wait_time, axis=1, arr=X_train)

# Train the machine learning model using a random forest regressor
model = RandomForestRegressor(n_estimators=100)
# model.fit(X_train, y_train)

# Generate a sample passenger and predict their wait time
sample_passenger = np.random.choice(wait_times, size=n_passengers)
predicted_wait_time = model.predict([sample_passenger])[0]

# Print the predicted wait time
print("Predicted wait time:", predicted_wait_time)
