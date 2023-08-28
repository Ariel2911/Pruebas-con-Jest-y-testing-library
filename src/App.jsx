import PropTypes from 'prop-types';

function App({ title, subtitle, name }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
}

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string,
};

App.defaultProps = {
  // title: 'No hay título',
  subtitle: 'No hay subtítulo',
  name: 'Ariel',
};
