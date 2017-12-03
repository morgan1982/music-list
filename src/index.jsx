import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TestComponent from './testComponent';



const renderApp = (Component) => {

    render(
        <AppContainer>
            <Component headline="Test Headline" count={1234} showCount />
        </AppContainer>,
        document.querySelector('#react-app'),
        );
};

renderApp(TestComponent);

if (module && module.hot) {
    module.hot.accept('./testComponent', () => {
        renderApp(TestComponent);
    })
}
