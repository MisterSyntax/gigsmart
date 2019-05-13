import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Score.module.css';

// -- components -- //

// -- actions -- //

// -- selectors -- //
import { getScore } from '../viewStates';

export const Score = ({
    score,
}) => {
    return (
        <div className={styles.score}>
            {score}
        </div>
    );
};

Score.propTypes = {
    score: PropTypes.number,
};

Score.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    score: getScore(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Score);
