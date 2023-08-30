import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Pueba en <App />', () => {
  const title = 'Hola!';
  const subtitle = 'Soy un subtitulo';

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola!', () => {
    render(<App title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe de mostrar el título en un h1', () => {
    render(<App title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    render(<App title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(1);
  });
});
