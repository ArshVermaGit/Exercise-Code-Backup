// @ts-check

export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const DAYS_IN_MONTH = 22;

  const fullMonths = Math.floor(numDays / DAYS_IN_MONTH);
  const remainingDays = numDays % DAYS_IN_MONTH;

  const discountedMonthCost =
    dayRate(ratePerHour) * DAYS_IN_MONTH * (1 - discount);

  const remainingDaysCost = remainingDays * dayRate(ratePerHour);

  return Math.ceil(fullMonths * discountedMonthCost + remainingDaysCost);
}
