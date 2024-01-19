import { useState } from "react";
import componentsImg from "./assets/components.png";
import Header from "./componets/Header/Header";
import CoreConcept from "./componets/CoreConcept/CoreConcept";
import TabButton from "./componets/TabButton/TabButton";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              img={componentsImg}
            ></CoreConcept>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              img={componentsImg}
            ></CoreConcept>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              img={componentsImg}
            ></CoreConcept>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              img={componentsImg}
            ></CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleSelect("props")}>Props</TabButton>
            <TabButton onClick={() => handleSelect("state")}>State</TabButton>
          </menu>

          {!selectedTopic ? <p>Please select a topic.</p> : null}

          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
