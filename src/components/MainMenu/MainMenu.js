import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { AppBar, Toolbar, withStyles } from '@material-ui/core';

import { connect } from 'react-redux';
import { startLogOut } from '../../store/actions/auth';

import mainMenuItem from '../../constants/mainMenuItem';

import history from '../../services/history';

const styles = (theme) => ({
    menuContainer: {
        width: '100%',
        height: '4rem',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        backgroundColor: theme.palette.silver,
        color: theme.palette.black,
        position: 'relative',
        textAlign: 'center',
    },
    menuItem: {
        '&:hover': {
            color: theme.palette.mainMenuHover,
            cursor: 'pointer',
        },
    },
    menuActiveItem: {
        color: theme.palette.white,
    },
});

const MainMenu = ({ classes, userStartLogOut }) => {
    const [currentURL, changeURL] = useState('');
    useEffect(() => {
        changeURL(history.location.pathname);
    }, []);
    return (
        <AppBar position="fixed" className={classes.menuContainer}>
            {mainMenuItem.map(({ id, name, link }) => (
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
            <Toolbar className={classes.menuItem} onClick={userStartLogOut}>
                Выйти
            </Toolbar>
        </AppBar>
    );
};

MainMenu.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    userStartLogOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    userStartLogOut: startLogOut,
};

export default compose(connect(null, mapDispatchToProps), withStyles(styles))(MainMenu);
