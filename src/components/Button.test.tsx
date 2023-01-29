import { BlueButton, LgButton, MainButton, RedButton, SmButton } from './Button.stories'
import { render, screen } from '@testing-library/react'

const mainColor = 'brown'

test('Red Button이 랜더링 된다', () => {
  render(<RedButton {...RedButton.args} />);

  expect(screen.getByRole('button')).toHaveTextContent(/Red/i);
  expect(screen.getByRole('button')).toHaveStyle(`backgroundColor: red`);
});

test('Blue Button이 랜더링 된다', () => {
  render(<BlueButton {...BlueButton.args} />);

  expect(screen.getByRole('button')).toHaveTextContent(/Blue/i);
  expect(screen.getByRole('button')).toHaveStyle(`backgroundColor: blue`);
});

test('SmButton이 랜더링 된다', () => {
  render(<SmButton {...SmButton.args} />);

  expect(screen.getByRole('button')).toHaveTextContent(/Small Button/i);
  expect(screen.getByRole('button')).toHaveStyle(`backgroundColor: gray`);
});

test('LgButton이 랜더링 된다', () => {
  render(<LgButton {...LgButton.args} />);

  expect(screen.getByRole('button')).toHaveTextContent(/Large Button/i);
  expect(screen.getByRole('button')).toHaveStyle(`backgroundColor: gray`);
});

test('Main Button이 랜더링 된다', () => {
  render(<MainButton {...MainButton.args} />);

  expect(screen.getByRole('button')).toHaveTextContent(/Main Button/i);
  expect(screen.getByRole('button')).toHaveStyle(`backgroundColor: gray`);
});