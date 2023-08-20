import styles from '../PageHeading/PageHeading.module.css';
import PropTypes from 'prop-types';

export default function PageHeading({ text }) {
  return <h1 className={styles.headingTitle}>{text}</h1>;
}

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
