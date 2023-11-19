import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data to AsyncStorage
const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving data to AsyncStorage:", error);
  }
};

// Retrieve data from AsyncStorage
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      console.log("Get: Value from AsyncStorage:", value);
      return value;
    }
  } catch (error) {
    console.error("Error retrieving data from AsyncStorage:", error);
  }
};

// Retrieve data from AsyncStorage
const removeData = async (key: string) => {
  try {
    const value = await AsyncStorage.removeItem(key);
    if (value !== null) {
      console.log("Delete: Value from AsyncStorage:", value);
    }
  } catch (error) {
    console.error("Error retrieving data from AsyncStorage:", error);
  }
};

export { saveData, getData, removeData };
