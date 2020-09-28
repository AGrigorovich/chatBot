import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    startGetBranchesList,
    startCreateBranch,
    startEditBranch,
    startDeleteBranch,
} from '../../store/actions/branches';

import Branch from './Branch';

const BranchContainer = ({
    getBranchesList,
    createBranch,
    editBranch,
    deleteBranch,
    arrayOfBranches = [],
}) => {
    useEffect(() => {
        getBranchesList();
    }, [getBranchesList]);
    return (
        <Branch
            createBranch={createBranch}
            editBranch={editBranch}
            arrayOfBranches={arrayOfBranches}
            deleteBranch={deleteBranch}
        />
    );
};

BranchContainer.propTypes = {
    getBranchesList: PropTypes.func.isRequired,
    createBranch: PropTypes.func.isRequired,
    editBranch: PropTypes.func.isRequired,
    deleteBranch: PropTypes.func.isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
    arrayOfBranches: state.branches.arrayOfBranches,
});

const mapDispatchToProps = {
    getBranchesList: startGetBranchesList,
    createBranch: startCreateBranch,
    editBranch: startEditBranch,
    deleteBranch: startDeleteBranch,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(BranchContainer);
