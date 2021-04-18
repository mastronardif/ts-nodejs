import mongoose from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
}

interface userModelInterface extends mongoose.Model<UserDoc> {
    build(attr: IUser): UserDoc
}

interface UserDoc extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}
  

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        requered: true
    },
    email: { 
        type: String,
        requered: true
    },
    password: { 
        type: String,
        requered: true
    }
})

userSchema.statics.build = (attr: IUser) => {
    return new User(attr)
  }

const User = mongoose.model<UserDoc, userModelInterface>('User', userSchema)

User.build({
    name: 'some title',
    email: 'some description',
    password: 'asdf'
  })

export { User }