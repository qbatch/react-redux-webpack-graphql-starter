import React from 'react';
import { render } from 'react-dom';
import { renderRoutes } from './routes';

const root = document.getElementById('root');
render(renderRoutes(), root);
