const axios = require('axios');

const sendGetRequest = async () => {
    try {
        const resp = await axios.get('http://35.224.7.178:5000/contentGenerator/Thank%20you%20can');
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
sendGetRequest();