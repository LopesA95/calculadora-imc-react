// Form.js
import { useEffect, useState } from 'react';
import styles from './Form.module.css';

const Form = ({ calculateIMC }) => {
  const [formData, setFormData] = useState({
    height: '',
    weight: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    const { height, weight } = formData;
    if (height && weight) {
      calculateIMC(height, weight);
    }

  }, [formData]);

  return (
    <form className='form'>
      <div className={styles.formContainer}>
        <label htmlFor="height">Altura (cm):</label>
        <input
          type="number"
          id="height"
          className={styles.inputField}
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formContainer}>
        <label htmlFor="weight">Peso (kg):</label>
        <input
          type="number"
          id="weight"
          className={styles.inputField}
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Form;
