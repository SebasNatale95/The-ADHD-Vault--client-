import { useState, useCallback, useEffect } from "react";
import "../musicRoom/dropdownMenu.css";

const DropdownMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [apiCall, setApiCall] = useState('')

    const testRequest = useCallback(async () => {
        await fetch('http://localhost:5000/api')
            .then(response => response.json())
            .then(json => {
                console.log('data de server:', json)
                setApiCall(JSON.stringify(json))
            })
    }, [])

    useEffect(() => {
        testRequest()
    }, [testRequest])

    function handleOpenDropdown() {
        switch(showMenu) {
            case true:
                setShowMenu(false)
                break
            case false:
                setShowMenu(true)
                break
            default:
                break
        }
    }
    
    return (
        <div className="frame">
            <button className="button" onClick={() => handleOpenDropdown()}>Seleccionar ejercicio</button>
            {showMenu ? 
                <div className="menuItems">
                    <button>• Menu item 1 </button>
                    <button>• Menu item 1 </button>
                    <button>• Menu item 1 </button>
                    <button>• Menu item 1 </button>
                </div>
            : null}


            <p>{apiCall}</p>

            
            <iframe src={'https://ks.imslp.net/files/imglnks/usimg/2/2a/IMSLP00874-Hanpart1.pdf' + '#view=fitH'} title="testPdf" height="500px" width="100%"></iframe>
        </div>
    )
};

export default DropdownMenu;