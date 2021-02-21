import {inject, injectable} from 'inversify';
import {User} from '../../../domain/entities/user';
import {UserRepository} from '../../../domain/repositories/userRepository';

@injectable()
export class GetUsersUseCase {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
  ) {}

  async execute(): Promise<Array<User>> {
    try {
      return await this.userRepository.getUsers();
    } catch (error) {
      throw new Error('Error get users');
    }
  }
}
