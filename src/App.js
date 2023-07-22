import './App.css';
import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux";
import {login , logout, selectUser} from "./features/counter/userSlice.js"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //Loggedin
        console.log(userAuth)
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        //Logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch] )

  
  return (
    <div className="app">
      {!user ? (
        <LoginScreen/>
      ):(
        <Router>
          <Switch>
            <Route path="/profile">
              <ProfileScreen/>
            </Route>
            <Route path="/">
              <HomeScreen/>

            </Route>
          </Switch>
        </Router>
      )}
      
    </div>
  );
}

export default App;
