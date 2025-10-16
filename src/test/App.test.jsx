import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App.jsx';

// Following the “one assertion per test” principle
describe('App', () => {

  it('renders without crashing and includes all imported components', () => {
    render(<App />); 
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders the Example component content', () => {
    render(<App />);
    expect(screen.getByText('Hello, Tailwind CSS!')).toBeInTheDocument();
  });

  it('renders the FlowChart component content', () => {
    render(<App />);
    expect(screen.getByText('addNote(note)')).toBeInTheDocument();
  });

  it('renders the Pricing component content', () => {
    render(<App />);
    const main = screen.getByRole('main');
    const { getByText } = within(main);
    expect(getByText('Pro')).toBeInTheDocument();
  });
});
