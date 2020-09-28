import sendRequest from './sendRequest';

export function sendLetterToSupportRequest(payload) {
    return setTimeout(() => {
        console.log('sendLetterToSupportRequest payload:::', payload);
    }, 1000);
    /*    return sendRequest('/auth/login', {
			data: JSON.stringify({
				email,
				password,
			}),
			method: 'POST',
		}); */
}
