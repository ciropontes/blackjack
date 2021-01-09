import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { Store } from '../store';
import App from "../App";

test('Renders without crashing', () => {

  const { container, getByText } = render(<Provider store={Store}>
    <App />
  </Provider>);
  expect(getByText('Regras do jogo')).toBeInTheDocument()
});