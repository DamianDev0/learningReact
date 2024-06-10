import './index.css';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard'; // Exportamos la función
import { useState } from 'react';

export function App() {
    // Pasamos función
    const formatUsername = (userName) => `@${userName}`;
    const [userName, setUserName] = useState('damian alejandro');
    const [name, setName] = useState('paco');

    const handleClick = () => {
        // const listUsersNames = ['pedro', 'pablo', 'casemiro', 'alirio'];
        // const randomUserName = listUsersNames[Math.floor(Math.random() * listUsersNames.length)];
        setUserName('elvergalarga'); //
    };

    const changeName = () => {
        setName("Damian");
    };

    return (
        // La renderizamos y pasamos los atributos de userName, name
        <div className='App'>
            <TwitterFollowCard formatUsername={formatUsername} userName={userName} name={name} />
            <TwitterFollowCard formatUsername={formatUsername} userName="elonMusk" name="Elon Musk" />
            <TwitterFollowCard formatUsername={formatUsername} userName="billgates" name="Bill Gates" />
            <TwitterFollowCard formatUsername={formatUsername} userName="jeffbezos" name="Jeff Bezos" />
            <div className='container-buttons'>
            <button onClick={handleClick}>Cambiar userName</button>
            <button onClick={changeName}>Cambiar name</button>
            </div>
        </div>
    );
}
