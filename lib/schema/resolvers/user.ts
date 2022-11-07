import {
  LoginInput,
  LoginResponse,
  SignUpInput,
  UserResponse,
} from 'server/schema';
import { UserService } from 'server/services';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import type { IUserContext } from 'types';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => UserResponse)
  async createUser(@Arg('input') input: SignUpInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => LoginResponse)
  async login(@Arg('input') input: LoginInput, @Ctx() ctx: IUserContext) {
    return this.userService.login(input, ctx);
  }

  @Query(() => UserResponse)
  async getUser(@Ctx() ctx: IUserContext) {
    return this.userService.getUser(ctx);
  }

  @Query(() => LoginResponse)
  async refresh(@Ctx() ctx: IUserContext) {
    return this.userService.refresh(ctx);
  }

  @Query(() => Boolean)
  async logoutUser(@Ctx() ctx: IUserContext) {
    return this.userService.logout(ctx);
  }
}
