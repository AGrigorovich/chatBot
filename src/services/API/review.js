import sendRequest from './sendRequest';

export function getReviewsRequest() {
    return sendRequest('/client-comments', {
        method: 'GET',
    });
}

export function approveReviewRequest(payload) {
    return setTimeout(() => {
        console.log('approveReviewRequest payload:::', payload);
    }, 1000);
}

export function rejectReviewRequest(payload) {
    return setTimeout(() => {
        console.log('rejectReviewRequest payload:::', payload);
    }, 1000);
    /*    return sendRequest('/auth/login', {
			data: JSON.stringify({
				email,
				password,
			}),
			method: 'POST',
		}); */
}
