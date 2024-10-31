// import ENV from '../../src/config/enviroment.config.js';

export const POST = async (URL_API, body) => {
    try {
        const response = await fetch(URL_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'f77fa1b6-f294-4240-adbc-32f8e84dbc62',
            },
            body: JSON.stringify(body),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};
//Crear GET, PUT, DELETE

// GET
export const GET = async (URL_API) => {
    try {
        const auth_header = sessionStorage.getItem('access_token');
        const response = await fetch(URL_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'f77fa1b6-f294-4240-adbc-32f8e84dbc62',
                Authorization: `${auth_header}`,
            },
        });
        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// PUT
export const PUT = async (URL_API, body) => {
    try {
        const response = await fetch(URL_API, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'f77fa1b6-f294-4240-adbc-32f8e84dbc62',
            },
            body: JSON.stringify(body),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

// DELETE

export const DELETE = async (URL_API) => {
    try {
        const response = await fetch(URL_API, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'f77fa1b6-f294-4240-adbc-32f8e84dbc62',
            },
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};
