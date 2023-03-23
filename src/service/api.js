import axios from 'axios'

const URL = 'https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products'

export const authSignup = async(data) => {
    try {
        console.log(axios.post(`${URL}/signup`,data));
       return await axios.post(`${URL}/signup`,data);

    } catch (error) {
        console.log('error while creating signup api', error.message);
    }
}

export const authLogin = async(data) => {
    try {
       return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log('error while creating login api', error.message);
        return error.response;
    }
}

export const payUsingPaytm = async(data) => {
    try {
        let res = await axios.post(`${URL}/payment`,data)
        return res.data
    } catch (error) {
        console.log('error while calling payment api');
    }
}