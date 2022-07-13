import styles from './Modal.module.css';

export const Modal = ({ bigImg }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={bigImg} alt="big preview" />
      </div>
    </div>
  );
};
