import logo from './logo.svg';
import './App.css';
import Reversecc from './components/Reversecc';
import Reversefc from './components/Reversefc';

export const message = 'hellow';

export const user = 'Mike';
function App() {
  return (
    <body className='App'>
      <navigation>Link1 Link2</navigation>

      <div className='container'>
        <Reversecc />
        {/* <Reversefc /> */}
      </div>

      <footer>footer</footer>
    </body>
  );
}

export default App;
