import MusicRoom from "./MusicRoom";
import mblBanner from "../images/MOBILEheader_bannerWHITE.png";
import dskBanner from "../images/header_bannerWHITE.png";
import './styles/MainMenu.css';

interface Props {
    screenSelected?: (screen: Object | null) => void;
    musicRoomBgResize?: () => void;
};

function MainMenu(props: Props) {
    return (
        <div id="landing">
            <img className="dskBanner" src={dskBanner} alt='banner'></img>
            <img className="mblBanner" src={mblBanner} alt='banner'></img>
            <h1 className="bannerTxt">What do you wanna do?</h1>
            <div className="btnContainer">
                <button 
                    className="buttons" 
                    type="button" 
                    onClick={() => 
                        props.screenSelected && props.screenSelected!(null)
                    }>
                        Dev shit
                    </button>
                <button 
                    className="buttons" 
                    type="button" 
                    onClick={() => {                        
                        props.screenSelected && props.screenSelected(<MusicRoom/>)
                        props.musicRoomBgResize && props.musicRoomBgResize!()
                    }}>
                        Music shit
                </button>
                <button 
                    className="buttons" 
                    type="button" 
                    onClick={() => 
                        props.screenSelected && props.screenSelected!(null)
                    }>
                        No shit :c
                    </button>
            </div>
        </div>
    )
};

export default MainMenu;