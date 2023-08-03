// api.js
const BASE_URL = 'http://localhost:3001/api/v1'; // Replace this with your backend API URL

export const CallBackendAPI = async (methodType, url, requestBody, token = "") => {
    try {
        const requestOptions = {
            method: methodType,
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token':token
            },
        };

        if (requestBody) {
            requestOptions.body = JSON.stringify(requestBody);
        }

        const response = await fetch(`${BASE_URL}${url}`, requestOptions);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        if (response.status === 204) {
            return {};
        }

        const responseData = await response.json();
        const authToken = response.headers.get('X-Auth-Token');
        if (authToken) {
            localStorage.setItem('authToken', authToken);
        }
        return responseData;
    } catch (error) {
        console.error('Error communicating with the backend:', error.message);
        throw new Error('Error communicating with the backend. Please try again.');
    }
};

export default CallBackendAPI;
