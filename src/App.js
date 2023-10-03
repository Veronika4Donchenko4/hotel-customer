import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
  );
}

export default App;
