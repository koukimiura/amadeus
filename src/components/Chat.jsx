import React from 'react';
import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import kurisu from "../assets/image/twitter_kurisu.jpg";
import defaultImage from "../assets/image/default.png";
import dereImage from "../assets/image/dere.png";

const Chat = (props) =>{
	const check = (props.type === "question")
	const rightOrLeft = check? 'p-chat__row' : 'p-chat__reverse';
	const happyEnd = (props.text === "あ、ありがとう...別にあんたに感謝しているわけではない。これは形式的な礼というか何というか...");
	return (
		<ListItem className={rightOrLeft}>
        	<ListItemAvatar>
        	{(()=>{
				if (happyEnd && check){
					return (<Avatar alt="icon" src={dereImage}/>);
				} else if (check){
					return(<Avatar alt="icon" src={kurisu} />);
				} else {
					return(<Avatar alt="icon" src={defaultImage} />);
				}
        	})()}
        	</ListItemAvatar>
			<div className="p-chat__bubble">{props.text}</div>
        </ListItem>

		);


}


export default Chat;