import React from 'react';
import './App.css';
import {userAPI} from "./services/UserService";
import AppRouter from "./components/AppRouter";

function App() {
    const {data: users, error, isLoading} = userAPI.useFetchAllUsersQuery('')
  return (
    <div className="App">
        <AppRouter/>
    </div>
  );
}

export default App;
