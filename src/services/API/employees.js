import sendRequest from './sendRequest';

export function getEmployeesListRequest() {
    return sendRequest('/employees', {
        method: 'GET',
    });
}

export function createEmployeeRequest(payload) {
    const { name, surname, nickname, selectedBranches, selectedServices } = payload;
    return sendRequest('/employees', {
        data: JSON.stringify({
            name,
            surname,
            nickname,
        }),
        method: 'POST',
    });
}
