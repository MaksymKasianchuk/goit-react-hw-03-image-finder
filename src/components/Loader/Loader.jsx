import Loader from 'react-loader-spinner';
import styles from './Loader.module.scss';

const styledLoader = () => (
  <Loader type="ThreeDots" color="#DA2C43" className={styles.loader} />
);

export default styledLoader;