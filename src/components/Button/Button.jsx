import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
    <button type="button" onClick={onClick} className={styles.button}>Load more</button>
);

Button.propTypes ={
    onClick: PropTypes.func.isRequired,
};

export default Button;