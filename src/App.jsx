import Header from "./Components/Header/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcepts from "./Components/CoreConcepts";
import TabButtons from "./Components/TabButtons";
import { useState } from "react";

function App() {
  const [selectedButton, setSelectedButtons] = useState();
  function handleComponent(SelectedButton) {
    //selected button => Component,jsx,props,state
    setSelectedButtons(SelectedButton);
    console.log(SelectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons
              isSelected={selectedButton === "components"}
              onSelect={() => handleComponent("components")}
            >
              Component
            </TabButtons>
            <TabButtons
              isSelected={selectedButton === "jsx"}
              onSelect={() => handleComponent("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectedButton === "props"}
              onSelect={() => handleComponent("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectedButton === "state"}
              onSelect={() => handleComponent("state")}
            >
              State
            </TabButtons>
          </menu>
          {selectedButton && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedButton].title}</h3>
              <p>{EXAMPLES[selectedButton].description}</p>
              <pre>
                <code>{EXAMPLES[selectedButton].code}</code>
              </pre>
            </div>
          )}
          {!selectedButton && <p>Please Select Topic</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
