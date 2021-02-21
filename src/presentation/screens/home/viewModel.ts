import UserStore from '../../store/user';

class UserViewModel {
  private store: UserStore;

  constructor(userStore: UserStore) {
    this.store = userStore;
  }

  async fetchUsers(): Promise<void> {
    await this.store.fetchUsers();
  }

  getUsers() {
    return this.store.getUsers();
  }

  getUser(userId: string): void {
    // TODO: Pending implementation
    console.log(userId);
  }
}

export default UserViewModel;
