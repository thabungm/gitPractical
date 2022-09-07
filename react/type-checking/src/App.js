import './App.css';
import Notification from './components/Notification';
import NumberedButtons from './components/NumberedButtons';
import StudentCard from './components/StudentCard';
function App() {
  const studentData = {
    name: 'Richie Samson',
    id: 1209,
    active: true,
    courses: [
      'Deep Learning Fundamentals - 2019',
      'Python - Intermediate',
      'MERN - Intermediate',
    ],
  };
  return (
    <div className='App'>
      Type checking
      {/* <Notification messages={['Notification 1', 'Notification 2']} /> */}
      <NumberedButtons num={3} />
      {/* <StudentCard student={studentData} /> */}
    </div>
  );
}

export default App;
