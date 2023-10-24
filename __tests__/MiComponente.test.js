import React from 'react';
import { render } from '@testing-library/react';
import MiComponente from '../src/MiComponente';

test('Renderiza el componente MiComponente correctamente', () => {
  // Renderiza el componente en un contenedor virtual
  const { getByText, getByTestId } = render(<MiComponente texto="Texto de prueba" />);

  // Realiza aserciones sobre el contenido del componente
  expect(getByTestId('mi-componente')).toBeInTheDocument();
  expect(getByText('Mi Componente')).toBeInTheDocument();
  expect(getByText('Texto de prueba')).toBeInTheDocument();
});

test('Verifica el contenido del componente sin propiedades', () => {
  const { getByText } = render(<MiComponente />);

  expect(getByText('Mi Componente')).toBeInTheDocument();
  expect(getByText('')).toBeInTheDocument(); // El texto está vacío si no se proporciona la propiedad 'texto'
});