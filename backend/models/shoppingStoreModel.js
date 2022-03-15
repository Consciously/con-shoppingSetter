import mongoose from 'mongoose';

const storeSchema = mongoose.Schema(
	{
		store: {
			type: String,
			required: [true, 'Please add a store name'],
			unique: [true, 'Store already exists']
		}
	},
	{ timestamps: true, versionKey: false }
);

export default mongoose.model('Store', storeSchema);
