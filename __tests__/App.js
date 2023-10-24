import React from 'react';
import { render } from '@testing-library/react';
import MiComponente from './MiComponente';

test('Renderiza el componente MiComponente correctamente', () => {
  // Renderiza el componente en un contenedor virtual
  const { getByText } = render(<MiComponente />);

  // Realiza aserciones sobre el contenido del componente
  expect(getByText('Este es mi componente')).toBeInTheDocument();
});

test('Verifica una propiedad del componente', () => {
  const { getByTestId } = render(<MiComponente texto="Texto de prueba" />);
  const componente = getByTestId('mi-componente');

  // Realiza aserciones sobre la propiedad personalizada
  expect(componente).toHaveTextContent('Texto de prueba');
});
