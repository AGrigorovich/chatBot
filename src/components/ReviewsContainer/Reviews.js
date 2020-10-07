import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Grid, withStyles } from '@material-ui/core';

import MainMenu from '../MainMenu/MainMenu';
import AppFooter from '../AppFooter/AppFooter';
import ReviewDescriptionItem from './ReviewDescriptionItem';

const styles = {
    reviewContainer: {
        width: '65%',
        margin: '1.5rem',
    },
};

const Reviews = ({ classes, getReviews, arrayOfReviews, approveReview, rejectReview }) => {
    useEffect(() => {
        getReviews();
    }, [getReviews]);

    return (
        <>
            <MainMenu />
            <Grid className={classes.reviewContainer}>
                {arrayOfReviews.map(({ id, description }) => (
                    <ReviewDescriptionItem
                        key={id}
                        id={id}
                        description={description}
                        approveReview={approveReview}
                        rejectReview={rejectReview}
                    />
                ))}
            </Grid>
            <AppFooter />
        </>
    );
};

Reviews.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    getReviews: PropTypes.func.isRequired,
    approveReview: PropTypes.func.isRequired,
    rejectReview: PropTypes.func.isRequired,
    arrayOfReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Reviews);
