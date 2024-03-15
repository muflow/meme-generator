import logo from '../../public/img/meme_dog_icon.png';

import "./header.css"

export default function Headers() {
    return (
      <header className="header">
        <div className="logo-container">
          <img className="meme-logo" src={logo} alt="meme logo" />
          <h2>Meme Generator</h2>
        </div>
        <h5 className="header--weaving">React weaving</h5>
      </header>
    );
}