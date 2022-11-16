// Max number to convert is 99

import { dateHandle } from './dateHandle';

const ageHandle = birthday => {
  if (!birthday) {
    return null;
  }
  const numberNames = [
    'less then one',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
  ];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const birthDate = new Date(dateHandle(birthday, 'parse'));

  const now = Date.now();

  const years = new Date(now - birthDate).getFullYear() - 1970;
  const months = new Date(now - birthDate).getMonth();

  if (years > 99) {
    return null;
  }

  console.log(months);

  const number = years ? years : months;

  let append = years === 0 ? 'months' : 'years';

  if (number < 0) {
  }
  append = number % 10 === 1 ? append.slice(0, append.length - 1) : append;
  if (number < 16) {
    return `${numberNames[number]} ${append}`;
  }
  if (number < 20) {
    const indx = number % 10;
    return `${numberNames[indx]}teen ${append}`;
  }

  let result;
  for (let i = tens.length - 1; i >= 0; i -= 1) {
    const element = tens[i];
    if (number / (i * 10 + 20) >= 1) {
      const indx = number % 10;
      result = !indx ? `${element} ${append}` : `${element} ${numberNames[indx]} ${append}`;
      break;
    }
  }
  return result;
};

export { ageHandle };
