import React from 'react';

function Error({name}) {
return <div style={{textAlign:'center', fontWeight:'50px'}} data-testid="errorMsg">{name}, is not a verified student</div>
}

export default Error;
