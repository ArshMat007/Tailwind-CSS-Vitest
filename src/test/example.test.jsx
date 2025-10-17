import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExampleComponent from '/src/components/ExampleComponent.jsx';

describe('ExampleComponent', () => {
  
  it('renders correctly', () => {
    render(<ExampleComponent />);
    expect(screen.getByText('Hello, Tailwind CSS!')).toBeInTheDocument();
  });
});
//This test check weather ExampleComponent renders correctly with the expected text.