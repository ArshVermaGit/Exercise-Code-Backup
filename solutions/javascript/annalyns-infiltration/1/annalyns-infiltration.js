/**
 * The fast attack is available when the knight is sleeping
 */
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake;
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (petDogIsPresent) {
    return !archerIsAwake;
  }

  return prisonerIsAwake && !knightIsAwake && !archerIsAwake;
}
