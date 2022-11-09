import {
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

  this.password = await bcrypt.hash(this.password, 12);
  this.countersign = undefined;
  return next();
})
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ email: 1 })
export class User {
  readonly _id: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true, unique: true, lowercase: true })
  email: string;

  @prop({ default: 'user' })
  role: string;

  @prop({ required: true, select: false })
  password: string;

  @prop({ required: true })
  countersign: string | undefined;

  @prop({ default: 'default.jpeg' })
  photo: string;

  @prop({ default: true, select: false })
  verified: boolean;

  static async comparePasswords(data: string, hashed: string) {
    return await bcrypt.compare(data, hashed);
  }
}

export const UserModel = getModelForClass<typeof User>(User);
