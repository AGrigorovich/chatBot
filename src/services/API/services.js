import sendRequest from './sendRequest';

export function getServicesListRequest() {
    return sendRequest('/service-types', {
        method: 'GET',
    });
}

export function deleteServiceRequest(payload) {
    return sendRequest('/service-types', {
        data: JSON.stringify(payload),
        method: 'DELETE',
    });
}
