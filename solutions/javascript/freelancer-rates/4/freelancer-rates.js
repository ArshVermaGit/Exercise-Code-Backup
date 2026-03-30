export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;
  
  const discountedMonthlyRate = dayRate(ratePerHour) * 22 * (1 - discount);
  
  const total =
    fullMonths * discountedMonthlyRate +
    remainingDays * dayRate(ratePerHour);
    
  return Math.ceil(total);
}