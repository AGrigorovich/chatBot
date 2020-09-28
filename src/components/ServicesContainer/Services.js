import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';

import MainMenu from '../MainMenu/MainMenu';
import MainPageMenu from '../MainPageMenu/MainPageMenu';
import ServicesForm from './ServicesForm';
import ListOfServices from './ListOfServices';

const styles = {
    pageContainer: {
        display: 'flex',
        height: 'calc(100% - 4rem)',
    },
    servicesContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '1.5rem',
    },
};

const Services = ({
    classes,
    createService,
    editService,
    deleteService,
    arrayOfServices,
    arrayOfBranches,
}) => {
    const [selectedService, changeSelectedService] = useState({});

    return (
        <>
            <MainMenu />
            <Grid className={classes.pageContainer}>
                <MainPageMenu />
                <Grid className={classes.servicesContainer}>
                    <ServicesForm
                        selectedService={selectedService}
                        changeSelectedService={changeSelectedService}
                        createService={createService}
                        editService={editService}
                        arrayOfBranches={arrayOfBranches}
                    />
                    <ListOfServices
                        changeSelectedService={changeSelectedService}
                        deleteService={deleteService}
                        arrayOfServices={arrayOfServices}
                        arrayOfBranches={arrayOfBranches}
                    />
                </Grid>
            </Grid>
        </>
    );
};

Services.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    createService: PropTypes.func.isRequired,
    editService: PropTypes.func.isRequired,
    deleteService: PropTypes.func.isRequired,
    arrayOfServices: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(Services);
