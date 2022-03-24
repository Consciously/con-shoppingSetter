import mongoose from 'mongoose';

const ShoppingItemSchema = mongoose.Schema(
	{
		store: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Store',
			required: true
		},
		entry: {
			type: String,
			required: [true, 'Please add a text value']
		}
	},
	{ timestamps: true, versionKey: false }
);

export default mongoose.model('ShoppingItem', ShoppingItemSchema);
