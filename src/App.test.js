import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders App component', () => {
    render(<App />);

    // notice that we can load somethiong that it wrapped inside the inner childer n copmponets also !!! c
    // const greetingText = screen.getByText('Hello World!');
    const initialText = screen.getByText("It's good to see you!");

    // expect(greetingText).toBeInTheDocument();
    expect(initialText).toBeInTheDocument();
  });
});
