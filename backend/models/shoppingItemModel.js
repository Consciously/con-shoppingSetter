import mongoose from 'mongoose';

const ShoppingItemSchema = mongoose.Schema(
	{
		store: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Store'
		},
		entry: {
			type: String,
			required: [true, 'Please add a text value']
		}
	},
	{ timestamps: true, versionKey: false },
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);

export default mongoose.model('ShoppingItem', ShoppingItemSchema);
