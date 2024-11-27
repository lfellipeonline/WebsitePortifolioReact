import React from "react";
import DefaultButtonComponent from "./DefaultButtonComponent";

const MainTitleComponent = () => (
  <div>
    <div>
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '60vh',
            textAlign: 'center',
        }}>
          <h1 style={{
            color: 'white',
            fontFamily: 'heading-now-86-heavy-italic',
            fontSize: '60px',
            padding: '0px',
            margin: '0px',
            lineHeight: '60px'
          }}
          >Luiz Felipe</h1>
          <p style={{
            color: 'white',
            fontFamily: 'heading-now-86-heavy-italic',
            fontSize: '50px',
            padding: '0px',
            margin: '0px',
            
          }}>Design & Front End</p>
          <DefaultButtonComponent text="Explorar Conteúdo" />
        </main>
      </div>
  </div>
);

export default MainTitleComponent;