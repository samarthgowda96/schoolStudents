import React from 'react';
const errorvalidity=({name})=>{
  return (
    <div>
      <div data-testid="errorMsg" style={{textAlign:'center', fontWeight:'50px'}}>sorry, {name} validity has expired</div>
    </div>
  )

}
export default errorvalidity;