import axios from 'axios';

import localStorage from '../localStorage';

async function sendRequest(path, opts = {}) {
    const headers = {
        ...(opts.headers || {}),
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${localStorage.getItem('currentUserToken')}`,
    };

    return axios(`http://35.225.229.63:8181${path}`, {
        method: 'POST',
        ...opts,
        headers,
    });
}
export default sendRequest;
