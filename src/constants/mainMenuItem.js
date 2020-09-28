import endpoints from '../services/routeEndpoints';

const mainMenuItem = [
    { id: 0, name: 'Главная', link: endpoints.branch },
    { id: 1, name: 'Рассписание', link: endpoints.calendar },
    { id: 2, name: 'Отзывы', link: endpoints.reviews },
    // { id: 3, name: 'Тех поддержка', link: endpoints.support },
];

export default mainMenuItem;
