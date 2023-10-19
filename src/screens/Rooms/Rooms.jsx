import {db} from '../../firebase'
import { useEffect, useState } from 'react'
import { query, collection, onSnapshot } from 'firebase/firestore';


export const Rooms = () => {
	const [rooms, setRooms] = useState([]);
   
	useEffect(()=>{
		const q = query(collection(db, "Rooms"))
            
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const newRooms = []
			querySnapshot.forEach((doc) => newRooms.push({...doc.data(), id: doc.id}));
			setRooms(newRooms);                
		})
		return unsubscribe
	}, [])
	console.log(rooms)

	return (
	  <div>
		{rooms.map((elem) => {
          return <div>{elem.type}</div> 
		})}
	  </div>
	)
}