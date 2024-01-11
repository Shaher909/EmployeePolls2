import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
  test('renders the title text', () => {
    const titleText = 'Hello, Jest!';
    render(<Title text={titleText} />);

    // Use the screen utility provided by @testing-library/react to query for the rendered text
    const renderedText = screen.getByText(titleText);

    // Assert that the rendered text is truthy (i.e., it exists in the document)
    expect(renderedText).toBeTruthy();
  });
});