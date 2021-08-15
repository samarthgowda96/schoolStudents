import React from 'react';
const errorvalidity=({name})=>{
  return (
    <div>
      <div data-testid="errorMsg">sorry, {name} validity has expired</div>
    </div>
  )

}
export default errorvalidity;