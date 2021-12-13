import React, {useLayoutEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {getStorage} from './helpers';
import Homepage from './screens/Homepage';
import Login from './screens/Login';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useLayoutEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const token = await getStorage('token');
      if (token) {
        setIsLogin(true);
      }
    } catch (error) {
      console.log('Error');
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar barStyle="dark-content" translucent hidden={!isLogin} />
      {!isLogin && (
        <Login
          openPopup={openPopup}
          onPressOpenPopup={setOpenPopup}
          onLogin={setIsLogin}
        />
      )}
      {isLogin && <Homepage onLogin={setIsLogin} />}
    </SafeAreaView>
  );
};

export default App;
