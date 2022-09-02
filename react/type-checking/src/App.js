import './App.css';
import Notification from './components/Notification';
import NumberedButtons from './components/NumberedButtons';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className='App'>
      <NumberedButtons num={5} />
      <Notification messages={['Please renew your account']} />
      <StudentCard
        student={{
          name: 'Richie Samson',
          id: 1209,
          active: true,
          courses: [
            'Deep Learning Fundamentals - 2019',
            'Python - Intermediate',
          ],
        }}
      />
    </div>
  );
}

export default App;
