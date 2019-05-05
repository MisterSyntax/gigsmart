import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './BeginButton.module.css';

// -- components -- //

// -- actions -- //
import { fetchQuestions } from '../../../store/apiData/questions/actions';

// -- selectors -- //
import {
    getQuestionsApirUrlWithParams,
} from '../../../store/config/selectors/questionApi/config';

export const BeginButton = ({
    apiUrl,
    fetchQuestions,
}) => (
    <button
        className={styles['begin-button']}
        onClick={() => fetchQuestions(apiUrl)}
        type="button"
    >
        Begin the Quiz!
    </button>
);

BeginButton.propTypes = {
    apiUrl: PropTypes.string,
    fetchQuestions: PropTypes.func,
};

BeginButton.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    apiUrl: getQuestionsApirUrlWithParams(state),
});

const mapDispatchToProps = {
    fetchQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(BeginButton);
