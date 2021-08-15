import React from 'react';

function ResidentsList({name,users}) {
 
	return (
    
		<div>
			
			<ul data-testid="residentsNameList">
				<li key="item1">
          {name}
					
				</li>
			</ul>
		</div>
	);
}

export default ResidentsList;
