import { render } from '@testing-library/react';
import App from '../src/App';

describe('Pueba en <App />', () => {
  test('debe de hacer mach con el snapshop', () => {
    const title = 'Hola!';
    const { container } = render(<App title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el título en un h1', () => {
    const title = 'Hola!';
    const { container, getByText } = render(<App title={title} />);

    //comprueba que el título se encuentre en el componente
    expect(getByText(title)).toBeTruthy();

    //Comprueba que el h1 sea igual al título
    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toBe(title);

    //Comprueba que el h1 contenga el título
    expect(h1.innerHTML).toContain(title);
  });
});
