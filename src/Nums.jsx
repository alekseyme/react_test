import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Nums = () => {
	const { num } = useParams();

	return (
		<div>
			Номер{num}
			Какое то изменение с main ветки
			<Link className="back-btn" to="/">
				Назад!!!
			</Link>
		</div>
	);
};

export default Nums;
