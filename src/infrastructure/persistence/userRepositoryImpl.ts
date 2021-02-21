import {injectable, inject} from 'inversify';
import {User} from '../../domain/entities/user';
import {UserRepository} from '../../domain/repositories/userRepository';
import {UserRemoteDataSource} from '../datasources/user/userRemoteDataSource';
import {UserModel} from '../models/user';

@injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async getUsers(): Promise<User[]> {
    const users = await this.dataSource.getUsers();
    return users.map((user: UserModel) => User.create(user.id, user.email));
  }
}
