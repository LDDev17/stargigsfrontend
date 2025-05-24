import PayoutProps from "../types/PayoutsType";

const SamplePayoutsData: PayoutProps[] = [
  {
    title: 'Fast Pay',
    default: true,
    company: 'Visa',
    type: 'debit',
    cardNum: 2955,
    first_name: 'Andrew',
    last_name: 'Smith',
    countryCode: 'USA',
  },
  {
    title: 'Bank Account',
    default: false,
    type: 'Checking',
    cardNum: 8855,
    first_name: 'Andrew',
    last_name: 'Smith',
    countryCode: 'USA',
  }
];

export default SamplePayoutsData;