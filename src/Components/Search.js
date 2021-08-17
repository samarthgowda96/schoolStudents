import React,{useState} from 'react';
import students from '../studentsList.js'
import Error from './Error'
import ErrorValidity from './ErrorValidity'
import ResidentsList from './ResidentsList'

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  

	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search() {
  //declaring all the states
  const [name,setName]=useState('')
  const [joiningDate,setJoiningDate]=useState('')
  const [userCheck,setUserCheck]= useState('')
  const [validityCheck,setValidityCheck]= useState('')
 
  const [users,setUsers]=useState([])


  //checking all if the user is valid and verified
  const handleClick=()=>{

  for( var i =0 ;i<students.length;i++ ){
      let tempName = students[i]
      if(name.toLocaleLowerCase()===tempName.name.toLocaleLowerCase()){
          setUserCheck('valid')
          break
      }else{
        setUserCheck('notvalid')
      }
    }
    for( var i =0 ;i<students.length;i++ ){
        let temppName = students[i]
        if(temppName.name.toLocaleLowerCase()===name.toLocaleLowerCase()){
       
            var date=temppName.validityDate
            console.log(date)
            if(checkValidity(joiningDate,date)){
              setValidityCheck('valid')
              break
        }
      }else{
          setValidityCheck('notvalid')
        }
        

      }

  //set all the previous users
  if (userCheck==='valid'&&validityCheck==='valid'){
      setUsers(users=>[...users,name]) 
      
     }
     
    
  }
  
  //clearing out the input fields

  const clear=()=>{
      setName('')
      setJoiningDate('')
    }
   
      
return (
  <>
		<div style={{display:'flex', justifyContent:'center',alignItems:'center',height:'200px'}}>
      
			<label htmlFor="studentName">Student Name:
				<div>
          <input id="studentName" data-testid="studentName" type="text"
          onClick={clear}
          
          value={name}
          onChange={(e)=>{setName(e.target.value)}}/>
      
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
          <input id="joiningDate" data-testid="joiningDate" type="date"
          value={joiningDate}
          
          onChange={(e)=>{setJoiningDate(e.target.value)}}
          />
				</div>
			</label>
			<button style={{backgroundColor:'green',marginTop:'1em'}} type="button" data-testid="addBtn" onClick={handleClick}>Add</button>
     
      {userCheck==='notvalid'&&<Error  name={name} userCheck={userCheck}  style={{display:'flex', justifyContent:'center',alignItems:'center',height:'200px'}}/>}

      {validityCheck==='notvalid'&&<ErrorValidity  name={name}/> }
     
      <br></br>
      <br></br>
		</div>
    <div style={{textAlign:'center', fontWeight:'50px'}}>Residents List</div>
    <ResidentsList users={users}/> 
    </>
	);
}

export default Search;
