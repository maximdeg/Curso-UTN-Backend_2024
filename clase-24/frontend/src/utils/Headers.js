export const getUnnauthenticatedHeaders = () => {
    const unnauthenticatedHeaders = new Headers();
    unnauthenticatedHeaders.set('Content-Type', 'application/json');
    unnauthenticatedHeaders.set('x-api-key', 'f77fa1b6-f294-4240-adbc-32f8e84dbc62');
    return unnauthenticatedHeaders;
};

export const getAuthenticatedHeaders = () => {
    const authenticatedHeaders = new Headers();
    authenticatedHeaders.set('Content-Type', 'application/json');
    authenticatedHeaders.set('x-api-key', 'f77fa1b6-f294-4240-adbc-32f8e84dbc62');
    authenticatedHeaders.set('Authorization', sessionStorage.getItem('access_token'));
    return authenticatedHeaders;
};
