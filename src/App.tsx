import React from 'react';
import './App.css';
import {userAPI} from "./services/UserService";

function App() {
    const {data: users, error, isLoading} = userAPI.useFetchAllUsersQuery('')
  return (
    <div className="App">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка при загрузке данных</h1>}
        {users && users.map(user => <h1>{user.username}</h1>)}
    </div>
  );
}

export default App;
