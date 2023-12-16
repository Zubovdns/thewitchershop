import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../index';

const Types = observer(() => {
	const { product } = useContext(Context);
	return (
		<div>
			{product.types.map((type) => (
				<p
					key={type.id}
					onClick={() => {
						product.setSelectedType(type);
					}}
				>
					{type.name}
				</p>
			))}
		</div>
	);
});

export default Types;
