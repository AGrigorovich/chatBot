import sendRequest from './sendRequest';

export function logInRequest(payload) {
    const data = { ...payload };
    return setTimeout(() => {
        return data;
    }, 1000);
    /*    return sendRequest('/auth/login', {
        data: JSON.stringify({
            email,
            password,
        }),
        method: 'POST',
    }); */
}

export function logOutRequest() {
    return sendRequest('/auth/logout', {
        method: 'POST',
    });
}
