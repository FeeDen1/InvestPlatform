import React from 'react';
import './App.css';
import {userAPI} from "./services/UserService";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";


function App() {
    const {data: users, error, isLoading} = userAPI.useFetchAllUsersQuery('')
  return (
    <div className="App bg-gray-50 bg-[url('./UI/svg/wave.svg')] bg-no-repeat bg-bottom">
        <Navbar/>
        <AppRouter/>
    </div>
  );
}

export default App;
