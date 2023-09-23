import MainMenu from "./components/MainMenu";
import './App.css';
import { useEffect, useState, useRef } from "react";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Object | null>(null)
  const animatedBackground = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentScreen(<MainMenu 
      screenSelected={handleScreenChange} 
      musicRoomBgResize={handleBgResize}
    />)
  }, [])

  const handleScreenChange = (screen: Object | null) => {
    setCurrentScreen(screen)
  }
  const handleBgResize = () => {
      if (animatedBackground.current) animatedBackground.current.style.width = "100%"
      if (animatedBackground.current) animatedBackground.current.style.height = "100%"
  }

  return (
    <div id="bg_wrap">
      <div id="bg_root" ref={animatedBackground}>
        {currentScreen}
      </div>
    </div>
  )
};

export default App;