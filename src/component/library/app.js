// api.js
const BASE_URL = 'http://localhost:3001/api/v1'; // Replace this with your backend API URL

export const CallBackendAPI = async (methodType, url, requestBody) => {
    try {
        const requestOptions = {
            method: methodType,
            headers: {
                'Content-Type': 'application/json',
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
            // For successful DELETE requests (status code 204), return an empty response
            return {};
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error communicating with the backend:', error.message);
        throw new Error('Error communicating with the backend. Please try again.');
    }
};

export default CallBackendAPI;
