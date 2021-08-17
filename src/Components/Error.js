import React from 'react';

function Error({name,userCheck}) {
    console.log(userCheck)
   
return (
        <div>
            <div style={{textAlign:'center', fontWeight:'50px'}} data-testid="errorMsg">
                {name}, is not a verified student
            </div>
        </div>
       
)
}

export default Error;
