import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { AppBar, Toolbar, withStyles } from '@material-ui/core';

import history from '../../services/history';

import mainPageMenuItem from '../../constants/mainPageMenuItem';

const styles = (theme) => ({
    menuContainer: {
        width: '15rem',
        height: 'calc(100% - 2rem)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.mainPageMenu,
        color: theme.palette.black,
        position: 'relative',
        textAlign: 'center',
        padding: '3rem 0',
        zIndex: 9,
    },
    menuItem: {
        '&:hover': {
            color: theme.palette.red,
            cursor: 'pointer',
        },
    },
    menuActiveItem: {
        color: theme.palette.white,
    },
});

const MainPageMenu = ({ classes }) => {
    const [currentURL, changeURL] = useState('');
    useEffect(() => {
        changeURL(history.location.pathname);
    }, []);
    return (
        <AppBar position="fixed" className={classes.menuContainer}>
            {mainPageMenuItem.map(({ id, name, link }) => (
                <Toolbar
                    key={id}
                    onClick={() => {
                        changeURL(name);
                        history.push(link);
                    }}
                    className={link === currentURL ? classes.menuActiveItem : classes.menuItem}
                >
                    {name}
                </Toolbar>
            ))}
        </AppBar>
    );
};

MainPageMenu.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default compose(withStyles(styles))(MainPageMenu);
