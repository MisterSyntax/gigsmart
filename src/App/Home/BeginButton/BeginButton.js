import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './BeginButton.module.css';

// -- components -- //

// -- actions -- //

// -- selectors -- //

export const BeginButton = ({
    beginQuiz,
}) => (
    <button className={styles['begin-button']} onClick={beginQuiz} type="button">
        Begin the Quiz!
    </button>
);

BeginButton.propTypes = {
    beginQuiz: PropTypes.func,
};

BeginButton.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BeginButton);
