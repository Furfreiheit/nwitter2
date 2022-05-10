import React, {useState} from 'react';
import AppRouter from 'components/Router';

function App() {
  const [isLoggendIn, setIsLoggedIn] = useState(false);
  return (
    <>
        <AppRouter isLoggendIn={isLoggendIn}/>
        <footer>
          &copy; {new Date().getFullYear()} Nwitter
        </footer>
    </>
  ); 
  
}

export default App;
