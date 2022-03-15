import mongoose from 'mongoose';

const shoppingItemSchema = mongoose.Schema(
	{
		store: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Store'
		},
		text: {
			type: String,
			required: [true, 'Please add a text value']
		}
	},
	{ timestamps: true, versionKey: false }
);

export default mongoose.model('ShoppingItem', shoppingItemSchema);
