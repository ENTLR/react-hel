import React from "react";
import { useState } from "react";

export const List = () => {
	const [content, setContent] = useState([]);
	const [inputValue, setInputValue] = useState('');

	function clearList(){
		setContent([]);
	}

	const removeHandler = (removeIndex) => {
		const removeItem = content.filter((item, index) => {
			return removeIndex !== index;
		});
		setContent(removeItem);
	}
	
	return (
		<div>
			<div>
				<form onSubmit={(event) => {
					event.preventDefault()
					const temp = [inputValue, ...content];
					setContent(temp);
					setInputValue('');
				}}>
					<input 
						type="text" 
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						required
					/>
					<input type="submit" value="Submit"/>
					<ul>
						{
							content.map((item, index) => (
							<li>
								<p key={index}>{item}</p>
								<button onClick={() => removeHandler(index)} type="button">Remove</button>
							</li>))
						}
					</ul>
				</form>
				<button onClick={clearList}>Clear list</button>
			</div>
		</div>
	);
}