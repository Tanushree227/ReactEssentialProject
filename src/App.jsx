import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx'; 
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data';

function App() {
  
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton)
  {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic)
  {
    tabContent = (
    <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
      </div>
  )
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
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;