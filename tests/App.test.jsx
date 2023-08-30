import { render } from '@testing-library/react';
import App from '../src/App';

describe('<Pueba en <App / >', () => {
  test('debe de hacer mach con el snapshop', () => {
    const title = 'Hola!';
    render(<App title={title} />);
  });
});
