import componentsImg from "./assets/components.png";
import Header from "./componets/Header/Header";
import CoreConcept from "./componets/CoreConcept/CoreConcept";
import TabButton from "./componets/TabButton/TabButton";
function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
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
        </section>
      </main>
    </div>
  );
}

export default App;
