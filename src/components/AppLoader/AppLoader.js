import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';

import Loader from 'react-loader';

import { Grid, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    loaderContainer: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.silver,
        opacity: 0.9,
        zIndex: 9999,
    },
});

const AppLoader = ({ classes, loading }) => (
    <>
        {loading && (
            <Grid
                className={classes.loaderContainer}
                onClick={(event) => event.nativeEvent.stopImmediatePropagation()}
            >
                <Loader
                    loaded={!loading}
                    lines={13}
                    length={20}
                    width={10}
                    radius={30}
                    corners={1}
                    rotate={0}
                    direction={1}
                    color="#000"
                    speed={1}
                    trail={60}
                    shadow={false}
                />
            </Grid>
        )}
    </>
);

AppLoader.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    loading: state.loader.loading,
});
export default compose(connect(mapStateToProps, null), withStyles(styles))(AppLoader);
