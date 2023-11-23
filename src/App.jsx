import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx'; 
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton)
  {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
    <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('encapsulation')}>Encapsulation</TabButton>
            <TabButton onSelect={() => handleSelect('abstraction')}>Abstraction</TabButton>
            <TabButton onSelect={() => handleSelect('inheritance')}>Inheritance</TabButton>
            <TabButton onSelect={() => handleSelect('polymorphism')}>Polymorphism</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;