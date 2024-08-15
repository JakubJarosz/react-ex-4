import React ,{useState, useEffect} from "react";

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
    const listArr = 
        {
            "name": namelist,
            "phone": phonelist
        }
    setFullList(fullList.push(listArr))
    console.log(fullList)
  
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
       </div>
    )
}

export default Phonebook