import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { startGetReviews, startApproveReview, startRejectReview } from '../../store/actions/review';

import Reviews from './Reviews';

const ReviewsContainer = ({ getReviews, arrayOfReviews = [], approveReview, rejectReview }) => (
    <Reviews
        getReviews={getReviews}
        arrayOfReviews={arrayOfReviews}
        approveReview={approveReview}
        rejectReview={rejectReview}
    />
);

ReviewsContainer.propTypes = {
    getReviews: PropTypes.func.isRequired,
    approveReview: PropTypes.func.isRequired,
    rejectReview: PropTypes.func.isRequired,
    arrayOfReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
    arrayOfReviews: state.review.arrayOfReviews,
});

const mapDispatchToProps = {
    getReviews: startGetReviews,
    approveReview: startApproveReview,
    rejectReview: startRejectReview,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(ReviewsContainer);
