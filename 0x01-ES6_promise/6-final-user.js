import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => {
      const arr = [];
      data.forEach((result) => {
        if (result.status === 'fulfilled') {
          arr.push(result);
        } else {
          arr.push({ status: result.status, value: `Error: ${result.reason.message}` });
        }
      });
      return arr;
    });
}
