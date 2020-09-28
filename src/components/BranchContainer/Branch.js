import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';

import MainMenu from '../MainMenu/MainMenu';
import MainPageMenu from '../MainPageMenu/MainPageMenu';
import BranchForm from './BranchForm';
import ListOfBranches from './ListOfBranches';

const styles = {
    pageContainer: {
        display: 'flex',
        height: 'calc(100% - 4rem)',
    },
    branchContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '1.5rem',
    },
};

const Branch = ({ classes, createBranch, editBranch, deleteBranch, arrayOfBranches }) => {
    const [selectedBranch, changeSelectedBranch] = useState({});

    return (
        <>
            <MainMenu />
            <Grid className={classes.pageContainer}>
                <MainPageMenu />
                <Grid className={classes.branchContainer}>
                    <BranchForm
                        selectedBranch={selectedBranch}
                        changeSelectedBranch={changeSelectedBranch}
                        createBranch={createBranch}
                        editBranch={editBranch}
                    />
                    <ListOfBranches
                        changeSelectedBranch={changeSelectedBranch}
                        arrayOfBranches={arrayOfBranches}
                        deleteBranch={deleteBranch}
                    />
                </Grid>
            </Grid>
        </>
    );
};

Branch.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    createBranch: PropTypes.func.isRequired,
    editBranch: PropTypes.func.isRequired,
    deleteBranch: PropTypes.func.isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(Branch);
