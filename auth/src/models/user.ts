import mongoose from "mongoose";

// an interface to describe properties required to create new user

interface UserAttrs {
  email: string;
  password: string;
}

//interface that descibes the properties that user model has

interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<any, UserModel>("User", userSchema);

export { User };
User.build({
  email: "Test",
  password: "pas",
});
