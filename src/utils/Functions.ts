const getStorage = (key: string) => {
  return localStorage.getItem(key);
};

const setStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

const destroyStorage = (key: string) => {
  return localStorage.removeItem(key);
};

const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

const setSessionStorage = (key: string, value: string) => {
  return sessionStorage.setItem(key, value);
};

const destroySessionStorage = (key: string) => {
  return sessionStorage.removeItem(key);
};

const checkImageExists = (url: string, callback: (err: Error, val: boolean) => void) => {
  const img = new Image();
  img.onload = function() {
    callback(null, true);
  };
  img.onerror = function() {
    callback(new Error('error'), false);
  };
  img.src = url;
};

export {
  getStorage,
  setStorage,
  destroyStorage,
  getSessionStorage,
  setSessionStorage,
  destroySessionStorage,
  checkImageExists,
};
