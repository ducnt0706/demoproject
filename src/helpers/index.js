import AsyncStorage from '@react-native-async-storage/async-storage';

const checkSession = (userName, pass) => {
  let isLogin = false,
    msg = '';
  if (userName === 'admin') {
    if (pass === '123') {
      isLogin = true;
      msg = 'Success';
    } else {
      isLogin = false;
      msg = 'Password wrong';
    }
  } else {
    isLogin = false;
    msg = 'User name wrong';
  }
  return {
    isLogin,
    msg,
  };
};

const saveStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};

const getStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};

const clearStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};

export {checkSession, saveStorage, getStorage, clearStorage};
