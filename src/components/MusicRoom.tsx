import DropdownMenu from "./miscComponents/musicRoom/dropdownMenu";
import './styles/MusicRoom.css';

const MusicRoom: React.FC = () => {
    return (<div className="musicRoom">
        <div className="warmUpVideoFrame">
            <h1>✨ First things first ✨</h1>
            <iframe className="warmUpVideo" title='iframe' src="https://www.youtube-nocookie.com/embed/e28xk4YnUAA?start=142" allow="encrypted-media;"></iframe>
            <i className="fas fa-chevron-down"></i>
        </div>
        <button className="backHomeButton" type="button" onClick={() => window.location.reload()}>Go back</button>
        <div id="musicRoomInterface">
            <p>Estos botones estan dentro de musicRoom.tsx</p>
            <button type="button" onClick={() => alert("Falta codear el metronome worker")}>Metronome</button>
            <button type="button" onClick={() => alert("Falta codear el clock worker")}>Pomodoro clock</button>
            
            <p>Este marco es DropdownMenu.tsx</p>
            <DropdownMenu/>

        </div>
    </div>)
};

export default MusicRoom;