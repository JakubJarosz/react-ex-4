import React ,{useState, useEffect, useId} from "react";
import { nanoid } from "nanoid";

const Phonebook = () => {
const [namelist, setNamelist] = useState('');   
const [phonelist, setPhonelist] = useState('');
const [fullList, setFullList] = useState([]);

const handleName = (e) => {
    setNamelist(e.target.value)
}

const handlePhone = (e) => {
    setPhonelist(e.target.value);
}


  
const onBtnPress = (e) => {
    e.preventDefault();
    setFullList([
        ...fullList,
        {
            "name": namelist,
            "phone": phonelist,
            "id": nanoid()
        }
    ])
    // console.log(fullList)
  
}




    return (
       <div>
          <form onSubmit={onBtnPress}> 
        <label>Name</label><br></br>
        <input type="text" onChange={handleName} /><br></br>
        <label>Phone</label><br></br>
        <input type="text" onChange={handlePhone} /><br></br>
        <button type="submit">Submit</button>
      </form>
      <ul>
            {fullList.map((el) => (
                <li key={el.id}>Name: {el.name} Numer:{el.phone}<button onClick={() => {setFullList(fullList.filter((e) => el.id !== e.id))}}>Delete</button></li>
            ))}
        </ul>
       </div>
    )
}

export default Phonebook