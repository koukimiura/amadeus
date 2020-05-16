import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


//Material UIのスタイル
const useStyles = makeStyles(() => (
	createStyles({
		"button": {
			borderColor: '',
            color: "#fff",
            fontWeight: 600,
            marginBottom: "8px",
            "&:hover": {
                backgroundColor: "#EFABFF",
                color: "#fff"
            }
		}
		})
));

const Option = (props) => {
	const classes = useStyles();
	return(
			<Button className={classes.button} onClick={()=>{props.select(props.content, props.nextId)}} variant="outlined" fullWidth={true} >
				{props.content}
			</Button>
      
		);
}



export default Option;