import React from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/navbar';
import LoginScreen from './screens/LoginScreen/loginScreen'
import SignupScreen from './screens/SignupScreen/singupScreen'
import RoomsScreen from './screens/RoomScreen/roomsScreen';
import LandingScreen from './screens/LandingScreen/landingScreen';
import ViewRoomScreen from './screens/ViewRoomScreen/viewRoomScreen';
import UserProfile from './screens/UserProfileScreen/userProfileScreen'
import Restaurents from './screens/RestaurantsScreen/restaurantsScreen'
import BookingScreen from './screens/BookingScreen/bookingScreen';






const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" component={LandingScreen} exact />
        <Route path="/rooms" component={RoomsScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/room/:id" component={ViewRoomScreen} />
<<<<<<< HEAD
        <Route path="/roombook/:roomid/:fromdate/:todate" component={BookingScreen} />
=======
        <Route path="/restaurants" component={Restaurents} />

        <Route path="/roombook/:roomid" component={BookingScreen} />
>>>>>>> 3c68e9584ce16bf0935eb4283208a0b37758267e
        <Route path="/profile" component={UserProfile} />

      </div>
    </Router>
  );
}

export default App;
