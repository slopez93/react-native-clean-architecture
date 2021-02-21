import {makeObservable, action, observable} from 'mobx';
import {GetUsersUseCase} from '../../../application/usecases/user/GetUsersUseCase';
import {User} from '../../../domain/entities/user';
import {serviceLocator} from '../../../shared/config/di';

interface IUserStore {
  users: Array<User>;
}

class UserStore implements IUserStore {
  @observable users: User[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  async fetchUsers(): Promise<void> {
    const useCase = serviceLocator.get<GetUsersUseCase>('GetUsersUseCase');
    const users = await useCase.execute();
    this.users = users;
  }

  getUsers(): User[] {
    return this.users;
  }
}

export default UserStore;
