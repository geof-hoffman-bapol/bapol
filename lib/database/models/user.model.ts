import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  _id: {type: String, required: true, unique: true },
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

// Create or use the existing User model
const User = models.User || model('User', UserSchema);

export default User;
