import axios from 'axios';

const instance = axios.create({
    baseURL:"http://ec2-16-171-172-250.eu-north-1.compute.amazonaws.com:3001/"
})

export default instance;