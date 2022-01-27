import { API_TYPES } from './Middleware/PromiseApi';

export const getLoadingState = mode => {
    switch (mode) {
        case API_TYPES[0]: return true;
        case API_TYPES[1]: return false;
        case API_TYPES[2]: return false;
        default: return false;
    }
}