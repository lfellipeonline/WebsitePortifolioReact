import React, { useState } from 'react';
import HomebarSvgIcon from "./HomebarSvgComponent";
import HomebarConfigComponent from "./HomebarConfigComponent";
import lfellipestudios from '../images/lfellipestudios.png';

const HomebarComponent = () => {
  const [isConfigVisible, setConfigVisible] = useState(false);
  const toggleConfigVisibility = () => {
    setConfigVisible(!isConfigVisible);
  };
  return (
    <div>
      <header>
        <nav>
          <ul className='homebar-main'>
            <li className='homebar-logo'><img src={lfellipestudios} alt="" width={370} /></li>
            <div className='homebar-items'>
            <li className='homebar-item'><a href="Inicio">Início</a></li>
            <li className='homebar-item'><a href="Sobre">Sobre</a></li>
            <li className='homebar-item'><a href="Portifolio">Portifólio</a></li>
            <li className='homebar-item'><a href="Contato">Contato</a></li>
            <li className='homebar-item homebar-svg' onClick={toggleConfigVisibility}><HomebarSvgIcon /></li>
            </div>
          </ul>
        </nav>
      </header>
      <HomebarConfigComponent isVisible={isConfigVisible} />
    </div>
  );
}

export default HomebarComponent;