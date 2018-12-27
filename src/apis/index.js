import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { LOGIN_TOKEN } from '../helpers/constants';

axios.defaults.baseURL = 'http://localhost/zepro-feet-first/api/web/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem(LOGIN_TOKEN);

    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (err) => {
    return Promise.reject(err);
});


export default class API {

    static login = (data) => axios.get('https://www.jasonbase.com/things/nbQp.json').then(res => res.data);
    // axios.post('user/login', data).then(res => res.data);
    
    static profile = (data) => axios.post('user/profile', data).then(res => res.data);

}

