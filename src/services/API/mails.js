import sendRequest from './sendRequest';

export function getMailsListRequest() {
    return sendRequest('/remainders', {
        method: 'GET',
    });
}

export function sendNewMailRequest(payload) {
    const { remainderText } = payload;
    return sendRequest('/remainders', {
        data: JSON.stringify({
            remainderText,
            delayDays: 10,
        }),
        method: 'POST',
    });
}
