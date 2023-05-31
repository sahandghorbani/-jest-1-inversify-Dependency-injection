import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form component', () => {
  test('only accepts text input', () => {
    render(<Form />);

    const inputElement = screen.getByLabelText('Enter your name:');
    userEvent.type(inputElement, '12345');

    expect(inputElement.value).toBe('12345'); // Expect the value to be the entered text
  });
}); 