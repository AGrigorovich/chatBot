import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    startGetServicesList,
    startCreateService,
    startEditService,
    startDeleteService,
    startGetListOfBranches,
} from '../../store/actions/services';

import { startGetBranchesList } from '../../store/actions/branches';

import Services from './Services';

const ServiceContainer = ({
    getServicesList,
    createService,
    editService,
    deleteService,
    getListOfBranchesService,
    getListOfBranches,
    arrayOfServices = [],
    arrayOfBranches = [],
}) => {
    useEffect(() => {
        getServicesList();
        getListOfBranchesService();
        getListOfBranches();
    }, [getServicesList, getListOfBranchesService, getListOfBranches]);

    return (
        <Services
            createService={createService}
            editService={editService}
            arrayOfServices={arrayOfServices}
            arrayOfBranches={arrayOfBranches}
            deleteService={deleteService}
        />
    );
};

ServiceContainer.propTypes = {
    getServicesList: PropTypes.func.isRequired,
    createService: PropTypes.func.isRequired,
    editService: PropTypes.func.isRequired,
    deleteService: PropTypes.func.isRequired,
    getListOfBranchesService: PropTypes.func.isRequired,
    getListOfBranches: PropTypes.func.isRequired,
    arrayOfServices: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
    arrayOfServices: state.services.arrayOfServices,
    arrayOfBranches: state.branches.arrayOfBranches,
});

const mapDispatchToProps = {
    getServicesList: startGetServicesList,
    createService: startCreateService,
    editService: startEditService,
    deleteService: startDeleteService,
    getListOfBranchesService: startGetListOfBranches,
    getListOfBranches: startGetBranchesList,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(ServiceContainer);
