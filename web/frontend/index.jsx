import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/app/store';

import App from './App';
import { initI18n } from './utils/i18nUtils';

// Ensure that locales are loaded before rendering the app
initI18n().then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );
});
