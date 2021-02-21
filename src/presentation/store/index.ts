import UserStore from './user';

class RootStore {
  static type = {
    USER_STORE: 'userStore',
  };

  private userStore: UserStore;

  constructor() {
    this.userStore = new UserStore();
  }

  getStores = () => ({
    [RootStore.type.USER_STORE]: this.userStore,
  });
}

export default RootStore;
