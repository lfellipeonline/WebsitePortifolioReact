import React from "react";

const HomebarConfigComponent = ({ isVisible }) => {
  return (
    <div>
        <div className="aba-flutuante" id="abaFlutuante"
        style={{ display: isVisible ? 'block' : 'none' }}>
            <ul className="aba-flutuante-items" id="abaFlutuanteItems">
                <li id="alternarVisualização">Alternar Visualização</li>
                <li id="alterarIdioma">Alterar Idioma</li>
                <li id="alterarBarraBusca">Ocultar Barra de Busca</li>
            </ul>
        </div>
    </div>
  );
}

export default HomebarConfigComponent;