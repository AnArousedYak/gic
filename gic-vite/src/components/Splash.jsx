import arch from '../assets/arch.png';
import '../styles/Splash.css'

function SplashScreen() {
    return (
<>
    <div>
        <h1 className="logo">Gateway Instrument Cables Inc.</h1>
    </div>

    <div className="splash">
        <img src={arch} alt="Gateway Arch" />
    </div>
    
</>
    )
}

export default SplashScreen

