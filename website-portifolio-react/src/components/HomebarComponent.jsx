import React from "react";

const HomebarComponent = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className='homebar-main'>
            <li className='homebar-item'><a href="Inicio">Início</a></li>
            <li className='homebar-item'><a href="Sobre">Sobre</a></li>
            <li className='homebar-item'><a href="Portifolio">Portifólio</a></li>
            <li className='homebar-item'><a href="Contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HomebarComponent;