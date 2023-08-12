import Video from "./content";
import { useRef } from "react";
function App() {

  const video = useRef()
  
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <Video ref={video} />
      <button onClick={() => video.current.play()}>Play</button>
      <button onClick={() => video.current.pause()}>Pause</button>
    </div>
  );
}

export default App;
