import React from 'react';
import { useState } from 'react';
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f4e0b9').all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(20);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
