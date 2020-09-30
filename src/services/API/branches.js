import sendRequest from './sendRequest';

export function getBranchesListRequest() {
    return sendRequest('/salons', {
        method: 'GET',
    });
}

export function createBranchRequest(payload) {
    const { name, address, openTime, closeTime } = payload;
    return sendRequest('/salons', {
        data: JSON.stringify({
            name,
            address,
            openTime,
            closeTime,
        }),
        method: 'POST',
    });
}

export function editBranchRequest(payload) {
    const { id, name, address, openTime, closeTime } = payload;
    return sendRequest('/salons', {
        data: JSON.stringify({
            id,
            name,
            address,
            openTime,
            closeTime,
        }),
        method: 'PUT',
    });
}

export function deleteBranchRequest(payload) {
    return sendRequest('/salons', {
        data: JSON.stringify(payload),
        method: 'DELETE',
    });
}
