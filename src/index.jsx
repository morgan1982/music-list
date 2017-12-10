import React from 'react';
import 'bootstrap';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.scss';
import Template from './components/Template';

const renderApp = (Component) => {

    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#react-app'),
        );
};

renderApp(Template);

if (module && module.hot) {
    module.hot.accept('./components/Template', () => {
        renderApp(Template);
    })
}
