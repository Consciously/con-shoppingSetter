import mongoose from 'mongoose';

const ShoppingStoreSchema = mongoose.Schema(
	{
		store: {
			type: String,
			required: [true, 'Please add a store name'],
			unique: [true, 'Store already exists']
		}
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	},
	{ timestamps: true, versionKey: false }
);

// Reverse populate with virtuals
ShoppingStoreSchema.virtual('items', {
	ref: 'ShoppingItem',
	localField: '_id',
	foreignField: 'store',
	justOne: false
});

export default mongoose.model('Store', ShoppingStoreSchema);
