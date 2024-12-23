import backgroundImage from './assets/background.jpg'; 
import './App.css';

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
        {}
      </div>
    </div>
  );
};
