import { useState } from 'react';
import './ModalWindow.css';

function ModalWindow() {
    const [isOpenWindow, setIsOpenWindow] = useState (false);
    const openWin = () => {
        setIsOpenWindow(true);
    };

    const closeWin = () => {
        setIsOpenWindow(false);
    };

    return (
    <div className='modalApp'>
        <button className="modalWindowButton" onClick={openWin}>Открыть окно</button>
        <div className= {`modal-overlay ${isOpenWindow ? 'show' : ''}`} onClick={closeWin}>
            <div className={`modal-content ${isOpenWindow ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className='closeButton' onClick={closeWin}> X </button>
                <h2>✨Вас зарикроллили✨</h2>
                <img className="modal-gif" src="https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif" alt="gif" />
            </div>
        </div>
    </div>
    );
}

export default ModalWindow;
