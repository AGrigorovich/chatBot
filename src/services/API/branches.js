import sendRequest from './sendRequest';

export function getBranchesListRequest() {
    return sendRequest('/salons', {
        method: 'GET',
    });
}

export function createBranchRequest(payload) {
    const { name, address } = payload;
    return sendRequest('/salons', {
        data: JSON.stringify({
            name,
            address,
        }),
        method: 'POST',
    });
}

export function editBranchRequest(payload) {
    const { id, name, address } = payload;
    return sendRequest('/salons', {
        data: JSON.stringify({
            id,
            name,
            address,
        }),
        method: 'PUT',
    });
}

export function deleteBranchRequest(payload) {
    const { id } = payload;
    return sendRequest('/salons', {
        data: JSON.stringify({
            id,
        }),
        method: 'DELETE',
    });
}
