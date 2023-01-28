import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { App } from './App';
test('Then it should display the title', () => {
    render(<App></App>);

    const element = screen.getByText(/who/i);
    expect(element).toBeInTheDocument();
});
