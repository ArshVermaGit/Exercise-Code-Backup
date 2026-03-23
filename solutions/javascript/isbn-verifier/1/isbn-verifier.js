export function isValid(isbn){
  isbn = isbn.replace(/-/g,'');
  if(!/^\d{9}[\dX]$/.test(isbn)) return false;
  let sum = 0;
  for(let i=0;i<10;i++){
    let val = isbn[i] === 'X' ? 10 : +isbn[i];
    sum += val * (10 - i);
  }
  return sum % 11 === 0;
}