import { cardsInstance } from 'api/axios';
import { HttpError } from 'errors/http-errors';

/**
 * Create a card
 */
export const postCard = async ({ token, userId, word, attributes }) => {
  try {
    const response = await cardsInstance.post(
      '/',
      {
        userId,
        word,
        attributes,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Protected route, potentially 401
    if (error.response && error.response.status === 401) {
      throw new HttpError(
        'error',
        'Oops! Unauthorized',
        'You are not authorized to access this resource. Please sign in.',
        401
      );
    }

    // Server error
    throw new HttpError(
      'error',
      'Something Went Wrong',
      "We're sorry, but there was an issue with the server. Please try again later.",
      error?.response?.status
    );
  }
};
