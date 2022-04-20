// Core
import { lazy } from 'react';

// Pages
export const Register = lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
