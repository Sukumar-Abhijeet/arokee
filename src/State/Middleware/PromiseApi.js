export const API_TYPES = ['REQUEST', 'SUCCESS', 'FAILURE'];

const promiseMiddleware = () => {
    return next => action => {
        const { promise, ...rest } = action;
        if (!promise) return next(action);

        next({ ...rest , mode : API_TYPES[0] });
        return promise
            .then(response => {
                next({ ...rest, response: response, mode: API_TYPES[1] });
                return true;
            })
            .catch(error => {
                next({ ...rest, error, mode: API_TYPES[2] });
                return false;
            });
    };
};
export default promiseMiddleware;
