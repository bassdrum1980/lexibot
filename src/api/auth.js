import { authInstance } from 'api/axios';
import { HttpError } from 'errors/http-errors';

/**
 * Sign Up a new user
 * @param {String} name
 * @param {String} email
 * @param {String} password
 */

export const signUp = async ({ firstName, email, password }) => {
  try {
    const response = await authInstance.post('/signup', {
      firstName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new HttpError(
        'error',
        'Oops! Email Already Taken',
        'The email you entered is already in use. Please try again with a different email.',
        400
      );
    }

    throw new HttpError(
      'error',
      'Something Went Wrong',
      "We're sorry, but there was an issue with the server. Please try again later.",
      error?.response?.status
    );
  }
};

// /**
//  * Fetch a user profile from the backend
//  * @param {String} email
//  * @param {String} password
//  */
// export const signIn = async (email, password) => {
//   try {
//     const response = await authInstance.post('/signin', {
//       email,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     // if (error.response && error.response.status === 404) {
//     //   throw new HttpError(
//     //     'error',
//     //     'Oops! Word Not Found',
//     //     "We couldn't find a definition for the word you entered. Please check for any typos and try again.",
//     //     404
//     //   );
//     // }
//     // throw new HttpError(
//     //   'error',
//     //   'Something Went Wrong',
//     //   "We're sorry, but there was an issue with the server. Please try again later.",
//     //   error?.response?.status
//     // );
//   }
// };
