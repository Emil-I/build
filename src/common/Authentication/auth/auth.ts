export class Auth {

    public name: string;

    constructor() {
        this.name = 'ivam';
    }

    public getUser(data: string) {

        return `${this.name} ${data}`;
    }

}

