<<<<<<< Updated upstream
=======
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
>>>>>>> Stashed changes
import { query, collection, onSnapshot } from 'firebase/firestore';
import './App.css';
import { useEffect } from 'react';
import {db} from './firebase'

function App() {
  useEffect(() =>{
    const q = query(collection(db, ' employees')) 
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div className="App">
      <h1>Hotel</h1>
    </div>
=======
<div className='App'>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<HeaderComponent />}>
						<Route index element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/registration' element={<Register />} />
						<Route path='/account' element={<Account />} />
						<Route path='/room/:id' element={<RoomDetail />} />
					</Route>
				</Routes>
			</AuthContextProvider>
		</div>
>>>>>>> Stashed changes
  );
}

export default App;
