const getStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

const setStorage = (key: string, value: string): void => {
  return localStorage.setItem(key, value);
};

const destroyStorage = (key: string): void => {
  return localStorage.removeItem(key);
};

const getSessionStorage = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

const setSessionStorage = (key: string, value: string): void => {
  return sessionStorage.setItem(key, value);
};

const destroySessionStorage = (key: string): void => {
  return sessionStorage.removeItem(key);
};

const checkImageExists = (
  url: string,
  callback: (err: Error, val: boolean) => void,
): void => {
  const img = new Image();
  img.onload = function(): void {
    callback(null, true);
  };
  img.onerror = function(): void {
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
