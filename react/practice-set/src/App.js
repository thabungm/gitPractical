import logo from './logo.svg';
import './App.css';
import Fragments from './features/fragments';
import ListOfItems from './features/listOfItems';
import ProfileListCC from './features/profileList/ProfileList';
import Counter from './features/errorBoundary/Counter';
import DemoErrorBoundary from './features/errorBoundary/DemoErrorBoundary';
import ControlledForm from './features/controlledAndUncontrolled/Controlled';
import UnControlled from './features/controlledAndUncontrolled/UnControlled';
import FormValidation from './features/form/FormValidation';
import PortalDemo from './features/portal/PortalDemo';
import RoutesDemo from './features/routes';
import ContextApiTest from './features/contextApi/usingContextApi/ContextApiTest';
function App() {
  return (
    <div className='App'>
      {/* <ListOfItems /> */}
      {/* <ProfileListCC /> */}
      {/* <Counter /> */}
      {/* <DemoErrorBoundary /> */}
      {/* <ControlledForm /> */}
      {/* <UnControlled /> */}
      {/* <Fragments /> */}
      {/* <FormValidation /> */}

      {/* <PortalDemo /> */}
      {/* <RoutesDemo /> */}
      <ContextApiTest />
    </div>
  );
}

export default App;
