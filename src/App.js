import { FirstLevel } from './components/firstlevel/first-level';
import { SecondLevel } from './components/secondlevel/secondLevel';
import { Place } from './components/place/place.tsx';
import { Plane } from './components/plan/plane.jsx';
import './App.css';
import { DressCode } from './components/dress-code/dress-code.tsx';
import { Detail } from './components/detail/detail.jsx';
import { FormComponent } from './components/form-component/form-component.jsx';
import { Contact } from './components/contact/contact.jsx';


function App() {
  return (
    <div className="App">
      <FirstLevel />
      <SecondLevel />
      <Place />
      <Plane />
      <DressCode />
      <Detail />
      <FormComponent />
      <Contact />
    </div>
  );
}

export default App;
