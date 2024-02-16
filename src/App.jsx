import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    bmi: null,
    classification: '',
  });

  const calculateIMC = (height, weight) => {
    if (!height || !weight) return; // Validar preenchimento dos campos

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);

    setFormData((prevData) => ({
      ...prevData,
      bmi: bmiValue.toFixed(2),
      classification: getClassification(bmiValue),
    }));
  };

  const getClassification = (bmi) => {
    if (bmi < 18.5) return 'Abaixo do peso';
    if (bmi < 24.9) return 'Peso normal';
    if (bmi < 29.9) return 'Sobrepeso';
    if (bmi < 34.9) return 'Obesidade Grau I';
    if (bmi < 39.9) return 'Obesidade Grau II';
    return 'Obesidade Grau III';
  };

  return (
    <div className="container">
      <h1 className="title">Calculadora de IMC</h1>
      <Form formData={formData} setFormData={setFormData} calculateIMC={calculateIMC} />
      {formData.bmi && <Result bmi={formData.bmi} classification={formData.classification} />}
    </div>
  );
}

export default App;
