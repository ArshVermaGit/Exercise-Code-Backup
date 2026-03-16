export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const ratePerDay = dayRate(ratePerHour);

  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  const discountedMonthPrice = fullMonths * 22 * ratePerDay * (1 - discount);
  const remainingDaysPrice = remainingDays * ratePerDay;

  return Math.ceil(discountedMonthPrice + remainingDaysPrice);
}