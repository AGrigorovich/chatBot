import sendRequest from './sendRequest';

export function getClientsListRequest() {
    return sendRequest('/clients', {
        method: 'GET',
    });
}

export function createClientRequest(payload) {
    const { name, surname, comment, phoneNumber } = payload;
    return sendRequest('/clients', {
        data: JSON.stringify({
            name,
            surname,
            comment,
            phoneNumber,
        }),
        method: 'POST',
    });
}
