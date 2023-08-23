import './App.css';
import { useState } from 'react';
import GoalForm from './components/GoalForm';
import ListOfGoals from './components/ListOfGoals';

function App() {
  const [allGoals, updateAllGoals] = useState([]);

  const addGoal = (goal) => {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div className='myApp'>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

export default App;
