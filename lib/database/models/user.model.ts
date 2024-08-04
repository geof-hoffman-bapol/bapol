import { Schema, model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Define the User schema with a pre-save hook
const UserSchema = new Schema({
  _id: { type: String, required: true },
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

// Pre-save hook to set _id to a new string if not provided
UserSchema.pre('save', function (next) {
  // Check if _id is not set
  if (!this._id) {
    // Set _id to a new UUID if it is not provided
    this._id = uuidv4();
  }
  // Proceed with the save operation
  next();
});

// Create or use the existing User model
const User = models.User || model('User', UserSchema);

export default User;