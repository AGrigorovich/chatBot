import sendRequest from './sendRequest';

export function getServicesListRequest() {
    return sendRequest('/service-types', {
        method: 'GET',
    });
}
