import sendRequest from './sendRequest';

export function getMailsListRequest() {
    return sendRequest('/remainders', {
        method: 'GET',
    });
}

export function sendNewMailRequest(payload) {
    return setTimeout(() => {
        console.log('sendNewMailRequest payload:', payload);
    }, 1000);
}
