import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption) {
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, 'days');

    if (!isWeekend(deliveryDate)) {
      remainingDays--;
    }
  }

  return deliveryDate.format('dddd, MMMM D');
}

export function getDeliveryOption(deliveryOptionId) {
  let matchingOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      matchingOption = option;
    }
  });

  return matchingOption || deliveryOptions[0];
}

export const deliveryOptions = [
  {
    id: '1',
    deliveryDays: 7,
    priceCents: 0
  },
  {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
  },
  {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
  }
];