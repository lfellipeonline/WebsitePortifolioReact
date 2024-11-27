import React from "react";

const HomebarConfigComponent = ({ isVisible }) => {
  return (
    <div>
        <div className="aba-flutuante" id="abaFlutuante"
        style={{ display: isVisible ? 'block' : 'none' }}>
            <ul className="aba-flutuante-items" id="abaFlutuanteItems">
                <li id="alternarVisualização">Você querer que o search</li>
                <li id="alterarIdioma">esteja pronto em 1 dia</li>
                <li id="alterarBarraBusca">com indexação, destaques de conteúdo, thumbnail, titulo, descrição, aba de recentes e COM A DESGRAÇA DO BACK END FUNCIONANDO. é pra acabar com a minha vida. morra</li>
            </ul>
        </div>
    </div>
  );
}

export default HomebarConfigComponent;