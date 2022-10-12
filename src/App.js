import { MyComponent } from "./components/typeform";
import { Calendly,  CalendlyPopup } from "./components/Calandly";
function App() { 
  return (
    <div className="App">
      <MyComponent />
      {/* <Calendly /> */}
      <CalendlyPopup />
    </div>
  );
}

export default App;
