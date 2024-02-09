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

let babiesHobiesOfMoyaLakshu = guruKripaFamily.babies.map(
  (baby, index, babyArray) => {
    if (baby === 'RamLalla') {
      return {
        [baby]: {
          hobby: 'Archery',
          favoritesubject: 'LearingItselfisfavorite',
          name: baby,
          coachname: 'Moya',
        },
      };
    }
    if (baby === 'Lakshman') {
      return {
        [baby]: {
          hobby: 'Karate',
          favoritesubject: 'Music',
          name: baby,
          coachname: 'Lakshmi',
        },
      };
    }
    if (baby === 'Sruthi') {
      return {
        [baby]: {
          hobby: 'Dance&Music',
          favoritesubject: 'Dance&Music',
          name: baby,
          coachname: 'Lakshmi&OnlineGurus',
        },
      };
    }
    if (baby === 'GaneshVenkat') {
      return {
        [baby]: {
          hobby: 'Cricket',
          favoritesubject: 'Mathematics',
          name: baby,
          coachname: 'Venkat',
        },
      };
    }
    if (baby === 'Poorni') {
      return {
        [baby]: {
          hobby: 'Cooking',
          favoritesubject: 'Tamil&Sanskrit&Telugu&Maths',
          name: baby,
          coachname: 'Rev&OnlineGurus',
        },
      };
    }
  }
);

let guruKripaFamilyWithBabyHobbiesOfMoyaLakshu = {
  ...guruKripaFamilyWithBabyHobbiesofSubaKalyan,
  babies: [...babiesHobiesOfMoyaLakshu],
};

let moyaLakshmiBabies = {};
guruKripaFamilyWithBabyHobbiesOfMoyaLakshu.babies.forEach((baby, index) => {
  Object.assign(moyaLakshmiBabies, baby);
});

guruKripaFamilyWithBabyHobbiesOfMoyaLakshu = {
  ...guruKripaFamilyWithBabyHobbiesofSubaKalyan,
  babies: moyaLakshmiBabies,
};

let kalyanSubaBabies = {};

guruKripaFamilyWithBabyHobbiesOfMoyaLakshu.kalyansubababies.forEach(
  (baby, index) => {
    Object.assign(kalyanSubaBabies, baby);
  }
);

let updatedGuruKripaFamilyWithBabyHobbiesofSubaKalyan = {
  ...guruKripaFamilyWithBabyHobbiesOfMoyaLakshu,
  kalyansubababies: kalyanSubaBabies,
};

let babiesHobiesOfPrakashArch =
  updatedGuruKripaFamilyWithBabyHobbiesofSubaKalyan.prakarchbabies.map(
    (baby, index, babyArray) => {
      if (baby === 'SriKala') {
        return {
          [baby]: {
            hobby: 'StoryTelling',
            favoritesubject: 'History,Hindi,Maths',
            name: baby,
            coachname: 'Prak',
          },
        };
      }
      if (baby === 'RajaSastha') {
        return {
          [baby]: {
            hobby: 'Gymnastics',
            favoritesubject: 'English,Maths,History',
            name: baby,
            coachname: 'Prak,Moya',
          },
        };
      }
      if (baby === 'Pushkala') {
        return {
          [baby]: {
            hobby: 'Dance&Music',
            favoritesubject: 'Dance&Music',
            name: baby,
            coachname: 'Lakshmi&OnlineGurus',
          },
        };
      }
      if (baby === 'Revathi') {
        return {
          [baby]: {
            hobby: 'Cooking',
            favoritesubject: 'Mathematics,Science,English,Tamil',
            name: baby,
            coachname: 'Venkat,Murali,Prak',
          },
        };
      }
    }
  );

let updatedGuruKripaFamilyWithBabyHobbiesOfPrakArch = {
  ...updatedGuruKripaFamilyWithBabyHobbiesofSubaKalyan,
  prakarchbabies: [...babiesHobiesOfPrakashArch],
};

let updatedGuruKripaFamilyWithBabyHobbiesOfMoyaLakshu = {
  ...updatedGuruKripaFamilyWithBabyHobbiesOfPrakArch,
  moyalakshuBabies: updatedGuruKripaFamilyWithBabyHobbiesOfPrakArch.babies,
};
// Destructuring Feature can also be used in a way to remove specific keys from an object and to extract out required keys in the new object.
let { babies, ...newGuruKripaFamilyWithBabyHobbiesOfMoyaLakshu } =
  updatedGuruKripaFamilyWithBabyHobbiesOfMoyaLakshu;

let updatedGuruKripaFamilyWithMyInLaws = {
  ...newGuruKripaFamilyWithBabyHobbiesOfMoyaLakshu,
  'father-in-law': 'Moorthy Naren',
  'mother-in-law': 'Mala Moorthy',
  'Brother-in-law': 'Kesava Moorthy',
  'Sister-in-law': 'Chella Kesav',
};
