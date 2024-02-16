import React from 'react';
import styles from './Result.module.css';

const Result = ({ bmi, classification }) => {
  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.title}>Resultado</h2>
      <p className={styles.value}>Seu IMC é: {bmi}</p>
      <p className={styles.value}>Classificação: {classification}</p>
    </div>
  );
};

export default Result;
