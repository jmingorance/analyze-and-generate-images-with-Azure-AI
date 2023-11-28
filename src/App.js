import React from 'react';

function App() {
  const value = 'World';
  const titulo = <h1>Computer vision</h1>
  const label = <label>Insert URL or type prompt</label>
  const textarea = <textarea></textarea>
  const btnAnalyze = <button>Analyze</button>;
  const btnGenerate = <button>Generate</button>;

  return titulo, label, textarea, btnAnalyze, btnGenerate;
}

export default App;
