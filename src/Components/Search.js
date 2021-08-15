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
  const [name,setName]=useState('')
  const [joiningDate,setJoiningDate]=useState('')
  const [userCheck,setUserCheck]= useState(false)
  const [validityCheck,setValidityCheck]= useState(false)
  const [display,setDisplay]=useState(false)
  const [users,setUsers]=useState([])

  
  const handleClick=()=>{
   setUsers(users=>[...users,name])
   
    for( var i =0 ;i<students.length;i++ ){
      var tempName = students[i]
      if(name.toLocaleLowerCase()===tempName.name.toLocaleLowerCase()){
          var validityDate=tempName.validityDate
          setUserCheck(false)
          console.log(checkValidity(joiningDate,validityDate))
          if(checkValidity(joiningDate,validityDate)){
              setValidityCheck(false)
          }else{
              setValidityCheck(true)
          }
          break
          }
          setUserCheck(true)
       }
       if (userCheck&&checkValidity){
     
         
         setDisplay(false)
       }else{
         setDisplay(true)
       }
       console.log(users)
      
  

  }
	return (

		<div>
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text"
          onChange={(e)=>{setName(e.target.value)}}/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date"
          onChange={(e)=>{setJoiningDate(e.target.value)}}
          />
				</div>
			</label>
			<button type="button" data-testid="addBtn" onClick={handleClick}>Add</button>
     
      {userCheck?<Error name={name}/>:<div></div>}
      {validityCheck?<ErrorValidity name={name}/>:<div></div>}
      <div>Residents List</div>
      {display?<ResidentsList name={users}/>:<div></div>}
		</div>
	);
}

export default Search;
