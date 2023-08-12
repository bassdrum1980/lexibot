import { authInstance } from 'api/axios';
import { HttpError } from 'errors/http-errors';

/**
 * Activate user account
 * @param {String} token
 */
export const postActivateAccount = async ({ token }) => {
  try {
    const response = await authInstance.post('/activate', {
      token,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new HttpError(
        'error',
        'Oops! Broken Link',
        'Looks like the activation link is broken. Please sign up again.',
        400
      );
    }

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data?.error === 'Expired link.'
    ) {
      throw new HttpError(
        'error',
        'Expired Link',
        'Looks like the activation link has expired. Please sign up again.',
        401
      );
    }

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data?.error === 'Error saving user in database.'
    ) {
      throw new HttpError(
        'error',
        'Error Saving User',
        'Error saving user in the database. The activation link may have been used already. Please sign up again.',
        401
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

/**
 * Sign Up a new user
 * @param {String} firstName
 * @param {String} email
 * @param {String} password
 */

export const postSignUp = async ({ firstName, email, password }) => {
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

/**
 * Sign In a user
 * @param {String} email
 * @param {String} password
 *
 * @returns {Object}
 * @property {String} token
 * @property {Object} user
 */
export const postSignIn = async ({ email, password }) => {
  try {
    const response = await authInstance.post('/signin', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      if (error.response.data?.error === 'Invalid Credentials') {
        throw new HttpError(
          'error',
          'Oops! Invalid Credentials',
          'The email or password you entered is incorrect. Please try again.',
          400
        );
      }

      if (error.response.data?.error === 'User Not Found') {
        throw new HttpError(
          'error',
          'Oops! User Not Found',
          'The email you entered is not registered. Please try again.',
          400
        );
      }
    }

    throw new HttpError(
      'error',
      'Something Went Wrong',
      "We're sorry, but there was an issue with the server. Please try again later.",
      error?.response?.status
    );
  }
};
