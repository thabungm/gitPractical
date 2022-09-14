import { ColorContextProvider } from './ColorContext';
import GrandParent from './GrandParent';

const ContextApiTest = () => {
  return (
    <ColorContextProvider>
      <GrandParent />
    </ColorContextProvider>
  );
};

export default ContextApiTest;
