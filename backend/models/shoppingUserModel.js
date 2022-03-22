import mongoose from 'mongoose';

const ShoppingUserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name']
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true
		},
		password: {
			type: String,
			required: [true, 'Please add a password']
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

export default mongoose.model('ShoppingUser', ShoppingUserSchema);
