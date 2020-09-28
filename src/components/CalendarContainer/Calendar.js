import React from 'react';
import { Grid } from '@material-ui/core';

import MainMenu from '../MainMenu/MainMenu';
import screen from '../../images/image.png';

const Calendar = () => (
    <>
        <MainMenu />
        <Grid>
            <div>Отображаются люди и расписание</div>
            <div>По горизонтали - персонал</div>
            <div>По вертикале - время</div>
            <div>У каждого сотрудника может быть несколько услуг</div>
            <div>Каждая услуга - имеет фиксированное время</div>
            <div>Пустая ячейка означает свободный слот</div>
            <div>Если ячейка занята в ней указана услуга и Имя клиента</div>
            <div>В каждую ячейку может быть внесено несколько записей</div>
            <div>В ячейку можно внести так же время если это например 09:45</div>
            <div>Отображается если была оплата через бота</div>
            <div>Пользователь должен иметь возможность добавить слот</div>
            <p>
                <img src={screen} alt="screen" />
            </p>
        </Grid>
    </>
);

export default Calendar;
