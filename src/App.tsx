import { get } from 'https';
import React from 'react';
import './App.css';
import DisplayText from './DisplayText';

function App() {

  const getUserFullName = async (username: string): Promise<string> => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if(userResponse.ok)
    {
      const users = await userResponse.json();
      const userByName = users.find((usr: any) => {
          return usr.username.toLowerCase() === username
      });
      return userByName.name;
    }
    return "";
  }

  return (
    <div className="App">
      <header className="App-header">
        <DisplayText getUserFullName={getUserFullName}></DisplayText>
      </header>
    </div>
  );
}

export default App;
