import axios from 'axios';
import qs from 'qs';

export class User {

    public apiUrl: string;

    public token: any;

    public headers: any;

    public query: any;

    constructor() {
        // this.apiUrl = 'https://jsonplaceholder.typicode.com/';
        this.apiUrl = 'http://127.0.0.1:3003/';

        this.headers = {
            'accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded',
        };

        this.token = null;

        if (this.token) {
            this.headers.Authorization = `Bearer ${this.token}`;
        }

        this.query = axios.create({
            baseURL: this.apiUrl,
            headers: this.headers,
        });
    }

    get Token() {
        return this.token;
    }

    set Token(token) {
        this.token = token;
    }

    public testUser(data: string) {
        return data;
    }

    public allPosts() {
        return this.query.get('/posts');
    }

    public signup(data: string) {
        return this.query.post('/register', qs.stringify(data));
    }

    public signin(data: string) {
        return this.query.post('/login', qs.stringify(data));
    }

}
