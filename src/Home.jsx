import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from './components/Button';

const Home = ({ title }) => {
	const nums = useSelector(({ nums }) => nums.items);
	const dispatch = useDispatch();

	const addNum = () => {
		dispatch({
			type: 'ADD_NUM',
			payload: 443,
		});
	};

	return (
		<div>
			<h1>{title}</h1>
			<Button onClickBtn={addNum}>Добавить число</Button>
			<ul>
				{nums.map((num, index) => (
					<li key={index}>
						<Link to={'nums/' + num}>{num}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
