import React from 'react';
import TextField from '@material-ui/core/TextField';






const TextInput = (props) => {
	return(
	      <TextField  
		      label={props.label}
		      fullWidth={true}
		      margin={"dense"}
		      multiline={props.multiline}
		      rows={props.rows}
		      type={props.type}
		      onChange={props.onChange}
	       />
		);


}

export default TextInput;