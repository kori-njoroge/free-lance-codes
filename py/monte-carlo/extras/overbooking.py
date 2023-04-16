import numpy as np

# Define function to calculate profits given number of excess tickets sold
def calculate_profit(num_tickets, overbooking_penalty):
    # Define constants
    ticket_price = 500
    revenue_per_ticket = 250
    num_seats = 100
    # Calculate number of passengers that will show up
    num_passengers = min(num_tickets, num_seats)
    # Calculate revenue from ticket sales
    revenue = num_passengers * revenue_per_ticket
    # Calculate penalty if overbooked
    penalty = 0
    if num_tickets > num_seats:
        penalty = (num_tickets - num_seats) * ticket_price * overbooking_penalty
    # Calculate total profit
    profit = revenue - penalty
    return profit

# Define function to run Monte Carlo simulation and return optimal number of excess tickets
def run_simulation(num_iterations, overbooking_penalty):
    # Define constants
    max_tickets = 150
    # Initialize variables
    best_profit = 0
    best_num_tickets = 0
    # Run Monte Carlo simulation
    for i in range(num_iterations):
        num_tickets = np.random.randint(1, max_tickets+1)
        profit = calculate_profit(num_tickets, overbooking_penalty)
        # Check if current profit is better than best profit so far
        if profit > best_profit:
            best_profit = profit
            best_num_tickets = num_tickets
    return best_num_tickets

# Example usage
num_iterations = 10000
overbooking_penalty = 1.25
optimal_num_tickets = run_simulation(num_iterations, overbooking_penalty)
print(f"Optimal number of excess tickets to sell: {optimal_num_tickets}")
