import React from 'react';
import {Chat} from './index'
import {createStyles, makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';


//Material UIのスタイルを適応する。
const useStyles = makeStyles(() => 
	createStyles({
		"chats": {
			height: "340px",
            padding: "0",
            overflow: "auto"
        }
	}),
);

const Chats = (props) => {
	const classes = useStyles();
	return(
		<List className={classes.chats} id={"scroll-area"}>
			{props.chats.map((value, index)=> {
				return <Chat text={value.text} key={index.toString()} type={value.type} onClick={props.onClick}/>
			})}
    	</List>
		);
};

export default Chats;





