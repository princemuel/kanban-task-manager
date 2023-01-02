import {
  DocumentType,
  getModelForClass,
  index,
  ModelOptions,
  pre,
  prop,
  Severity,
} from '@typegoose/typegoose';
import * as bcrypt from 'bcrypt';

@pre<User>('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(12);

  this.password = await bcrypt.hash(this.password, salt);
  this.countersign = undefined;
  return next();
})
@ModelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
      transform: (document: UserDocument, returnedObject) => {
        returnedObject.id = returnedObject?._id?.toString();
        delete returnedObject?._id;
        delete returnedObject?.__v;
      },
    },
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ email: 1 })
export class User {
  readonly _id: string;

  @prop({ required: true, trim: true })
  name: string;

  @prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @prop({ default: 'user', lowercase: true })
  role: string;

  @prop({ required: true, select: false, trim: true })
  password: string;

  @prop({ required: true, select: false, trim: true })
  countersign?: string;

  @prop({ default: 'default.jpeg' })
  photo: string;

  @prop({ default: true, select: false })
  verified: boolean;

  static async comparePasswords(data: string, hashed: string) {
    return await bcrypt.compare(data, hashed);
  }
}
export type UserDocument = DocumentType<User>;
export const UserModel = getModelForClass<typeof User>(User);
