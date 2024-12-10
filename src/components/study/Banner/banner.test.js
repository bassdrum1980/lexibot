import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Banner from '.';

test('renders correct user name and cards total', () => {
  render(
    <Banner
      name="Alexander"
      cardsTotal={20}
    />
  );

  const title = screen.getByTestId('welcome');
  const cardsTotal = screen.getByTestId('cards-total');

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Hey Alexander!');

  expect(cardsTotal).toBeInTheDocument();
  expect(cardsTotal).toHaveTextContent('There are 20 cards in the queue.');
});

test('renders Study button which calls handleClick method', async () => {
  const mock = jest.fn();
  const user = userEvent.setup();

  render(
    <Banner
      name="Alexander"
      cardsTotal={20}
      handleClick={mock}
    />
  );

  const button = screen.getByRole('button', { name: /study/i });
  await user.click(button);

  expect(button).toBeInTheDocument();
  expect(mock).toHaveBeenCalled();
});
