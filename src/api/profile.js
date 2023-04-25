import { profileInstance } from 'api/axios';
import { HttpError } from 'errors/http-errors';

/**
 * Get User Profile
 */
export const getUserProfile = async ({ token }) => {
  try {
    const response = await profileInstance.get('/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new HttpError(
        'error',
        'Oops! Unauthorized',
        'You are not authorized to access this resource. Please sign in.',
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
