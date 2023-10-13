import React, { useState } from 'react';
import "./Navbar.css";

function TextPostForm() {
  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState('');

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponse('')
    try {
      const response = await fetch('/predict', {
        method: 'POST',
        body: textInput,
      });

      const data = await response.json();
      setResponse(data.predictionText);
      console.log(typeof(data.predictionText))
    } catch (error) {
      
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <h1>Sentiment Analysis</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={textInput} onChange={handleTextChange} />
      <button type="submit">Analyze</button>
    </form>
    {textInput && <p>input: {textInput}</p>}
    {response && <p>predicted sentiment: {response}</p>}
  </div>
  );
}

export default TextPostForm;