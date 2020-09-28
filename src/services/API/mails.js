import sendRequest from './sendRequest';

export function getMailsListRequest() {
    return setTimeout(() => {
        return {};
    }, 1000);
    /*    return sendRequest('/auth/login', {
			data: JSON.stringify({
				email,
				password,
			}),
			method: 'POST',
		}); */
}

export function sendNewMailRequest(payload) {
    return setTimeout(() => {
        console.log('sendNewMailRequest payload:', payload);
    }, 1000);
}
