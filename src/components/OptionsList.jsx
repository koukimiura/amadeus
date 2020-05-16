import React from 'react';
import {Option} from './index';

const OptionsList = (props) => {
	return(
			<div className="c-grid__answer">
				{props.options.map((value, index)=>{
					return <Option  key={index.toString()} content={value.content} nextId={value.nextId} select={props.select} />
					}
				)}
			</div>
	);
}

export default OptionsList;
