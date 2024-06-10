import './index.css';
import './App.css';
import { useState } from 'react'; // importamos utilidad o hooks,ayuda a darle interactividad a componentes de react

// Hacemos función de TwitterFollowCard para exportarla a la app
export function TwitterFollowCard({ formatUsername, userName, name}) {
    // Creamos un estado para el botón de seguir
    //se desscopone para mejor legibilidad
    const [isFollowing,setIsFollowing] = useState(false) // devuelve un array con dos posiciones

    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    const handleClick = () =>{ // se crea la funcion para cambiar de estado
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/microlink/${userName}`} 
                    alt="avatar" 
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>{formatUsername(userName)}</span> 
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}
