import endpoints from '../services/routeEndpoints';

const mainPageMenuItem = [
    { id: 0, name: 'Филиал', link: endpoints.branch },
    { id: 1, name: 'Персонал', link: endpoints.employees },
    { id: 2, name: 'Клиенты', link: endpoints.clients },
    { id: 3, name: 'Услуги', link: endpoints.services },
    { id: 4, name: 'Рассылка и Акции', link: endpoints.mails },
];

export default mainPageMenuItem;
