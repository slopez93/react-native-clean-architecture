import {inject, injectable} from 'inversify';
import {HttpManager} from '../../../shared/networking';
import {UserModel} from '../../models/user';

export interface UserRemoteDataSource {
  getUsers(): Promise<Array<UserModel>>;
}

@injectable()
export class UserRemoteDataSourceImpl implements UserRemoteDataSource {
  constructor(@inject('HttpManager') private http: HttpManager) {}

  async getUsers(): Promise<Array<UserModel>> {
    try {
      const response = await this.http.get('/users');
      return UserModel.fromArrayJSON(response);
    } catch (e) {
      throw new Error('Failed to get user');
    }
  }
}
