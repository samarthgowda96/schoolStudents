import React from 'react';
const errorvalidity=({name})=>{
  return (
    <div>
      <h1 data-testid="errorMsg">sorry, {name} validity has expired</h1>
    </div>
  )

}
export default errorvalidity;