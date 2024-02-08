let myfamily = {
  father: 'venkat',
  mother: 'rev',
  bro: 'prak',
  sis: 'suba',
  wife: 'lakshmi',
};

let mynewFamily = { ...myfamily, babies: ['RamLalla'] };

let happyFamily = {
  ...mynewFamily,
  babies: [
    ...mynewFamily.babies,
    'Lakshman',
    'Sruthi',
    'GaneshVenkat',
    'Poorni',
  ],
};
let happyFullFamily = {
  ...happyFamily,
  mother: 'revvenkat',
  bro: 'prak venkat',
  wife: 'lakshmi murali',
  sis: 'suba ganesh',
  athimber: 'Kalyan Krishna',
  manni: 'archana prakash',
};
let guruKripaFamily = {
  ...happyFullFamily,
  kalyansubababies: ['krishna', 'lakshmi', 'venkatrama', 'srirevathi'],
  prakarchbabies: ['SriKala', 'RajaSastha', 'Pushkala', 'Revathi'],
};

let babiesHobies = guruKripaFamily.kalyansubababies.map(
  (baby, index, babyArray) => {
    if (baby === 'krishna') {
      return {
        [baby]: {
          hobby: 'bhajan',
          favoritesubject: 'CS',
          name: baby,
          coachname: 'Moya',
        },
      };
    }
    if (baby === 'lakshmi') {
      return {
        [baby]: {
          hobby: 'Dance',
          favoritesubject: 'Geography',
          name: baby,
          coachname: 'Prak',
        },
      };
    }
    if (baby === 'venkatrama') {
      return {
        [baby]: {
          hobby: 'Cycling',
          favoritesubject: 'Mathematics',
          name: baby,
          coachname: 'Venki',
        },
      };
    }
    if (baby === 'srirevathi') {
      return {
        [baby]: {
          hobby: 'Gardening',
          favoritesubject: 'Philosophy',
          name: baby,
          coachname: 'Rev',
        },
      };
    }
  }
);

let guruKripaFamilyWithBabyHobbiesofSubaKalyan = {
  ...guruKripaFamily,
  kalyansubababies: [...babiesHobies],
};
