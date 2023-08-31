import { render, screen, fireEvent } from '@testing-library/react';
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

  test('debe de incrementar con el botón +1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(value + 1)).toBeTruthy();
  });

  test('debe de decrementar con el botón -1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(value - 1)).toBeTruthy();
  });

  test('debe de volver al valor inicial con el botón Reset', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    //
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(value)).toBeTruthy();
  });
});
