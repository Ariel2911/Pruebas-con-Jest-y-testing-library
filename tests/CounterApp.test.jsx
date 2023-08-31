import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
  const value = 10;

  test('debe de hacer match con el snapshop', () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100).innerHTML).toBeTruthy();
  });
});
