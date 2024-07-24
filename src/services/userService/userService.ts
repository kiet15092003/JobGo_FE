import axios from "axios";

export async function login(email: string, password: string): Promise<any> {
    try {
        let res = await axios.post('http://localhost:3000/auth/login', {
            email: email,
            password: password
        })
        console.log('Login success:', res.data);
        return res;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error('Error response:', error.response.data);
                throw new Error(error.response.data.message || 'Login failed');
            } else if (error.request) {
                // Request was made but no response was received
                console.error('Error request:', error.request);
                throw new Error('No response received from server');
            } else {
                // Something else happened
                console.error('Error message:', error.message);
                throw new Error(error.message);
            }
        } else {
            console.error('Unexpected error:', error);
            throw new Error('Unexpected error occurred');
        }
    }
}

export async function register( email: string, password: string , name: string, role: number) {
    try {
        const res = await axios.post('http://localhost:3000/auth/register', {
            email: email,
            password: password,
            role: role,
            name: name,
        })
        return res;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.request && error.response){
                throw new Error(error.response.data.message);
            }
            if (error.response){
                throw new Error(error.response.data.message);
            }
        }
    }
}