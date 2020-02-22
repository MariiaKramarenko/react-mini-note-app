import React, {Fragment} from 'react';


export const Alert = ({alert}) =>{
return (
<div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
	<strong>Warning!</strong>{alert.text}
	<button type="button" class="close"  aria-label="Close">
	<span aria-hidden="true">&times;</span>
	</button>
</div>
)
}