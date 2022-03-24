import ShoppingEntry from './ShoppingEntry';

function ShoppingList({ store }) {
	return (
		<div className='content__element'>
			<h3>{store.store}</h3>
			<ul>
				{store.items &&
					store.items.map(item => (
						<ShoppingEntry entry={item.entry} key={item._id} />
					))}
			</ul>
		</div>
	);
}

export default ShoppingList;
