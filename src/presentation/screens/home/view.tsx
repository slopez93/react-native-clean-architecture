import React from 'react';
import {View as RNView} from 'react-native';
import {ListItem} from 'react-native-elements';
import {StyleSheet} from 'react-native';

function View({users}: any) {
  if (!users) {
    return null;
  }

  return (
    <RNView style={styles.container}>
      {users.map((user: any) => (
        <ListItem key={user.id}>
          <ListItem.Content>
            <ListItem.Title>{user.email}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </RNView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// export default observer(View);
export default View;
