
import { query, collection, onSnapshot } from 'firebase/firestore';
import './App.css';
import { useEffect } from 'react';
import {db} from './firebase'

function App() {
  useEffect(() =>{
    const q = query(collection(db, ' employees')) 

    const unsubscribe = onSnapshot(q, (querySnapshot) =>{
      let todosArr =[]
      querySnapshot.forEach((doc) =>{
        todosArr.push({...doc.data(), id: doc.id})
      });
      console.log('todosArr: ', todosArr)
    })

    return unsubscribe
  }, []);

  return (
    <div className="App">
      <h1>Hotel</h1>
    </div>
  );
}

export default App;
