import { createStore } from 'redux';
import modules from './modules';

// 미들웨어 연결 및 react-hot-loader 적용
const configureStore = () => {
    const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export default configureStore;