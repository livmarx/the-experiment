import firebase from 'firebase';
import { createDocumentWithId } from '@/apis/databaseApi';

export function createResearcher(email, password, payload) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      cred.user.updateProfile({
        displayName: payload.name,
      });
      createDocumentWithId('researchers', payload, cred.user.uid)
        .then(() => {
          return Promise.resolve(true);
        })
        .catch(err => {
          return Promise.reject({ message: err.message });
        });
    })
    .catch(err => {
      return Promise.reject({ message: err.message });
    });
}

export function updateResearcher(administrator, email, displayName) {
  return administrator
    .updateEmail(email)
    .then(() => {
      administrator
        .updateProfile({
          displayName: displayName,
        })
        .then(() => {
          return Promise.resolve(true);
        })
        .catch(err => {
          return Promise.reject({ message: err.message });
        });
    })
    .catch(err => {
      return Promise.reject({ message: err.message });
    });
}

// export function deactivateAdministrator(administratorEmail) {
//   const functions = firebase.functions();
//   // makes a reference to the function:
//   const addDeletedAdministratorFlag = functions.httpsCallable(
//     'addDeletedAdministratorFlag'
//   );
//   // call the function:
//   return addDeletedAdministratorFlag({ email: administratorEmail })
//     .then(() => {
//       return Promise.resolve(true);
//     })
//     .catch(err => {
//       console.error(err);
//       return Promise.reject({ message: err.message });
//     });
// }
