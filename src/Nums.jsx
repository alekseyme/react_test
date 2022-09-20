import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Nums = () => {
	const { num } = useParams();

	return (
		<div>
			Номер{num}десктоп гитхаб <br></br>Какое то изменение с main ветки
			<Link className="back-btn" to="/">
				Назад!!! вот так чик чик чик
			</Link>
		</div>
	);
};

export default Nums;
