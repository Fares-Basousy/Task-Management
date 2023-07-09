import * as Mongoose from 'mongoose';
export const UserSchema = new Mongoose.Schema({
  id: {
    type: Mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  }
})


const User = Mongoose.model("User", UserSchema);
// User interface
export interface User extends Mongoose.Document {
    _id: string;
    username: string;
    password: string;

}