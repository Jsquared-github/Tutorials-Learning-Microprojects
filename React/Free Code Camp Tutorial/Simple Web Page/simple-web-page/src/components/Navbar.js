
import reactLogo from "../images/react-logo.png"

const Header = () => {
    return (
        <nav>
            <img className="logo" src={reactLogo} alt="React Logo" />
            <h3 className="logo-text">ReactFacts</h3>
            <h4 className="project-id"> React Course - Project 1 </h4>
        </nav>
    )
}

export default Header