// api.js
const BASE_URL = 'http://localhost:5000/api'; // Replace this with your backend API URL

const  callBackendAPI = async (methodType, url, requestBody) => {
    try {
        const requestOptions = {
            method: methodType,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        };

        const response = await fetch(`${BASE_URL}${url}`, requestOptions);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw new Error('Error communicating with the backend. Please try again.');
    }
};

export default callBackendAPI;
