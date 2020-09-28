import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, InputLabel, withStyles } from '@material-ui/core';

import TextArea from '../TextArea/TextArea';
import AppButton from '../AppButton/AppButton';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem 0',
    },
    reviewContainer: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    reviewWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    commentsWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '.5rem',
    },
    reviewCommentContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
};

const ReviewDescriptionItem = ({ classes, id, description, approveReview, rejectReview }) => {
    const [isUserWantLeaveComment, changeCommentVisibility] = useState('');
    const [reviewComment, changeReviewComment] = useState('');
    const sendReview = (isReviewApproved) => {
        if (isReviewApproved) {
            approveReview({ id, reviewComment });
        } else {
            rejectReview({ id, reviewComment });
        }
        changeCommentVisibility(false);
    };
    return (
        <>
            <Grid className={classes.root}>
                <Grid className={classes.reviewContainer}>
                    <Grid className={classes.reviewWrapper}>
                        <InputLabel>Отзыв</InputLabel>
                        <TextArea
                            name="review"
                            extFieldValue={description}
                            disabled
                            textFieldValue={description}
                        />
                    </Grid>
                    <Grid className={classes.buttonContainer}>
                        <AppButton
                            buttonName="Подтвредить"
                            handleClick={() => sendReview(true)}
                            disabled={false}
                            propsMargin=".25rem"
                        />
                        <AppButton
                            buttonName="Отклонить"
                            handleClick={() => sendReview(false)}
                            disabled={false}
                            propsMargin=".25rem"
                        />
                    </Grid>
                </Grid>
                <Grid className={classes.commentsWrapper}>
                    {isUserWantLeaveComment ? (
                        <Grid className={classes.reviewCommentContainer}>
                            <InputLabel>Оставить комментарий</InputLabel>
                            <TextArea
                                name="reviewsComment"
                                textFieldValue={reviewComment}
                                changeTextFieldValue={(event) =>
                                    changeReviewComment(event.target.value)
                                }
                                placeholder="Введите комментарий"
                            />
                        </Grid>
                    ) : (
                        <AppButton
                            buttonName="Оставить комментарий"
                            handleClick={() => changeCommentVisibility(true)}
                            disabled={false}
                            propsMargin=".25rem"
                        />
                    )}
                </Grid>
            </Grid>
        </>
    );
};

ReviewDescriptionItem.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    approveReview: PropTypes.func.isRequired,
    rejectReview: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReviewDescriptionItem);
