/* eslint-disable react-hooks/exhaustive-deps */
import {inject, observer} from 'mobx-react';
import React, {useEffect} from 'react';
import RootStore from '../../store';
import UserStore from '../../store/user';

import UserViewModel from './viewModel';
import View from './view';

interface IProps {
  userStore: UserStore;
}

function HomeScreen({userStore}: IProps) {
  const viewModel: UserViewModel = new UserViewModel(userStore);

  useEffect(() => {
    async function fetchData() {
      await viewModel.fetchUsers();
    }
    fetchData();
  }, []);

  return <View users={viewModel.getUsers()} />;
}

export default inject(RootStore.type.USER_STORE)(observer(HomeScreen));
