import React from 'react';

function MiComponente({ texto }) {
  return (
    <div data-testid="mi-componente">
      <h2>Mi Componente</h2>
      <p>{texto}</p>
    </div>
  );
}

export default MiComponente;