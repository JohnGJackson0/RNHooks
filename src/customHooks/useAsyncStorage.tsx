import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = (key: any, initialValue: any) => {
  const [value, setValue] = useState(async () => {
    return await getSavedValue(key, initialValue);
  });

  useEffect(() => {
    (async () => {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    })();
  }, [value]);

  return [value, setValue];
};

const getSavedValue = async (key: any, initialValue: any) => {
  if (AsyncStorage !== null) {
    return JSON.parse((await AsyncStorage.getItem(key)) as string);
  } else {
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  }
};

export default useAsyncStorage;
