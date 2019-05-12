import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Category.module.css';

// -- components -- //

// -- actions -- //

// -- selectors -- //
import { getCurrentQuestionCategory } from '../../../store/apiData/questions/apiData';

export const Category = ({
    category,
}) => (
    <h1 className={styles['question-category']}>
        {category}
    </h1>
);

Category.propTypes = {
    category: PropTypes.string,
};

Category.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    category: getCurrentQuestionCategory(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
