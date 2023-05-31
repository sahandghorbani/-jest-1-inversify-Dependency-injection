import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders initial text and changes text on button click', () => {
    render(<Greeting />);

    const initialText = screen.getByText("It's good to see you!");
    const changeTextButton = screen.getByText('Change Text!');

    expect(initialText).toBeInTheDocument();
    expect(screen.queryByText('chAnGed!' ,{ exact: true })).toBeNull(); // Initially not visible
    
    userEvent.click(changeTextButton);

    expect(screen.queryByText("It's good to see you!")).toBeNull(); // Should be hidden after button click
    expect(screen.getByText('Changed!')).toBeInTheDocument(); // Should be visible after button click
  });
});
