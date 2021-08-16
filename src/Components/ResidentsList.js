import React from 'react';

function ResidentsList({users}) {
 
	return (
    
		<div>
			
			<ul data-testid="residentsNameList">
        {users.map(item => (
          <li key = {item.name}>{item.name}</li>
        ))}
				
			</ul>
		</div>
	);
}

export default ResidentsList;
