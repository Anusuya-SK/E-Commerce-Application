import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import Footer from './Footer';

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...

    onAuthStateChanged(auth, (currentUser) => {
      console.log('THE USER IS >>>', currentUser);

      if(currentUser) {
        // the user just logged in / te user was logged in

        dispatch({
          type: 'SET_USER',
          user: currentUser
        })
      } else {
        // the user logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
            <Route path='/login' element={<Login />} /> 
            <Route path='/' element={(
              <>
              <Header />
              <Home />
              <Footer />
              </>
            )} /> 
            <Route path='/checkout' element={(
              <>
              <Header />
              <Checkout />
              <Footer />
              </>
            )} />    
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
