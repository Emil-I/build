import Cookies from 'js-cookie';

export class Session {

    public session: any;

    constructor() {
        this.session = {
            token: null,
            tokenKey: 'vueFirstAppToken',
        };

        // TODO протестировать COOKIES
        let json: any = window.localStorage.getItem(this.session.tokenKey);

        if (!json) {
            json = Cookies.get(this.session.tokenKey);
        }

        try {
            this.session.token = JSON.parse(json);
        } catch (err) {
            // console.log(err)
        }
    }

    public testSession(data: string) {
        return data;
    }

    /**
     *
     * @param response
     * @param remember
     */

    public start(response: string, remember: boolean) {
        this.session.token = authResultToTken(response);

        Cookies.set(this.session.tokenKey, this.session.token, {
            path: '/',
        });

        if (remember) {
            window.localStorage.setItem(this.session.tokenKey, JSON.stringify(this.session.token));
        }
    }

    public destroy() {
        this.session.token = null;

        Cookies.remove(this.session.tokenKey, {
            path: '/',
        });

        window.localStorage.removeItem(this.session.tokenKey);
    }

    /**
     *
     * @returns {boolean|*|null}
     */

    public getTokenId() {
        return this.session.token && this.session.token.id;
    }

}

function authResultToTken(result: any) {
    const data = result.data;
    return {
        id: data.api_token,
        userId: data.id,
        userName: data.name,
    };

}
