import React from 'react';

function ResidentsList({users}) {
 
	return (
    
		<div>
			
			<ul data-testid="residentsNameList">
				<li key="item1" >
          {users}
					
				</li>
			</ul>
		</div>
	);
}

export default ResidentsList;
