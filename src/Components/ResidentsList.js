import React from 'react';

function ResidentsList({users}) {
 
	return (
    
		<div>
			<ul data-testid="residentsNameList">
				<h2  style={{display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center',height:'200px' ,backgroundColor:'azure'}}>
				 	{users}
				</h2>
			</ul>
		</div>
	);
}

export default ResidentsList;
