import React from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/navbar';
import LoginScreen from './screens/LoginScreen/loginScreen'
import SignupScreen from './screens/SignupScreen/singupScreen'
import RoomsScreen from './screens/RoomScreen/roomsScreen';
import LandingScreen from './screens/LandingScreen/landingScreen';
import FoodScreen from './screens/FoodScreen/FoodScreen';
import ViewRoomScreen from './screens/ViewRoomScreen/viewRoomScreen';
import UserProfile from './screens/UserProfileScreen/userProfileScreen'
import weddingInsertScreen from './screens/WeddingInsertScreen/weddingInsertScreen'
import CreateRest from './screens/RestaurantCreate/restCreate'
import Restaurents from './screens/RestaurantsScreen/restaurantsScreen'
import BookingScreen from './screens/BookingScreen/bookingScreen';
import ViewRestaurent from './screens/RestaurantDetailPage/restDetails'
import CreateRoomScreen from './screens/CreateRoomScreen/createRoomScreen';





const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" component={LandingScreen} exact />
        <Route path="/rooms" component={RoomsScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/food" component={FoodScreen} />
        <Route path="/room/:id" component={ViewRoomScreen} />
        <Route path="/roombook/:roomid/:fromdate/:todate" component={BookingScreen} />
        <Route path="/restaurants" component={Restaurents} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/weddingInsert" component={weddingInsertScreen} />
        <Route path='/search/:keyword' component={RoomsScreen} />
        <Route path="/restaurant/:id" component={ViewRestaurent} />
        <Route path="/createRestaurant" component={CreateRest} />
        <Route path="/admin/createRoom" component={CreateRoomScreen} />

      </div>
    </Router>
  );
}

export default App;
