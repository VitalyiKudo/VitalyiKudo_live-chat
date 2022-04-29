// Middlewares
import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const isDev = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

const middleware: Middleware[] = [ sagaMiddleware ];


export { middleware, sagaMiddleware };
