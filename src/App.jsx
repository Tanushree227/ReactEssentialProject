import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "encapsulation"}
              onSelect={() => handleSelect("encapsulation")}
            >
              Encapsulation
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "abstraction"}
              onSelect={() => handleSelect("abstraction")}
            >
              Abstraction
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "inheritance"}
              onSelect={() => handleSelect("inheritance")}
            >
              Inheritance
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "polymorphism"}
              onSelect={() => handleSelect("polymorphism")}
            >
              Polymorphism
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
