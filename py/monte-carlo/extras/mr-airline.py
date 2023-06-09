import random
import numpy as np

# passengers simulation function
def simulate_passengers(mean_arrival_rate):
    """Simulate the number of passengers who show up for the flight using a Poisson distribution."""
    return np.random.poisson(mean_arrival_rate)

# calculate profit function
def calculate_profit(num_excess_tickets, num_passengers):
    """Calculate the profit generated by the airline given the number of excess tickets sold and the number of passengers who show up for the flight."""
    num_paying_passengers = max(num_passengers - num_excess_tickets, 0)
    revenue = num_paying_passengers * 250
    overbooking_penalty_cost = 1.25 * num_excess_tickets * 250
    profit = revenue - overbooking_penalty_cost
    return profit

# Monte-caro simulation function
def monte_carlo_simulation(num_simulations, mean_arrival_rate, excess_tickets_min, excess_tickets_max):
    profits = []
    for i in range(num_simulations):
        excess_tickets = np.random.randint(excess_tickets_min, excess_tickets_max+1)
        num_passengers = simulate_passengers(mean_arrival_rate)
        profit = calculate_profit(excess_tickets, num_passengers)
        profits.append(profit)
    if not profits:
        return 0, excess_tickets_max
    else:
        optimal_num_excess_tickets = excess_tickets_min + np.argmax(profits)
        avg_profit = np.mean(profits)
        return avg_profit, optimal_num_excess_tickets

def present_results(avg_profit, optimal_num_excess_tickets):
    """Present the results of the Monte Carlo simulation to the boss, including the optimal number of excess tickets to sell and the average profit generated."""
    print(f"Optimal number of excess tickets to sell: {optimal_num_excess_tickets}")
    print(f"Average profit generated: ${avg_profit:.2f}")
    
    
    
avg_profit, optimal_num_excess_tickets = monte_carlo_simulation(num_simulations=1000, mean_arrival_rate=200, excess_tickets_min=0, excess_tickets_max=50)
present_results(avg_profit, optimal_num_excess_tickets)

