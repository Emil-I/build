export class Auth {

    public name: string;

    public user: any;

    public session: any;

    public promise: any;

    constructor(user: object, session: object) {
        this.promise = false;
        this.name = 'ivam';
        this.user = user;
        this.session = session;
    }

    public getUserTest(data: string) {

        return `${this.name} ${data}`;
    }

    public getUser(reload: boolean) {
        if (reload) {
            this.promise = null;
        }

        if (!this.session.getTokenId()) {
            return new Promise((resolve, reject) => {
                return reject(null);
            });
        }

        if (!this.promise) {
            this.promise = this.user.me()
                .then((user: any) => {
                    // this.acl.setUser(user);
                    return user;
                })
                .catch((error: any) => {
                    this.session.destroy();
                    throw error;
                });
        }

        return this.promise;
    }

    public logout() {
        this.session.destroy();
        return this.getUser(true);
    }

    public isAuthenticated() {
        const isTokenId = this.session.getTokenId();
        return Boolean(isTokenId);
    }

}
