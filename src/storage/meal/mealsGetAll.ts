import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { orderBy } from "lodash";

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: any = storage ? JSON.parse(storage) : [];

    const sorted = orderBy(meals, ["date"], ["desc"]);

    return sorted;
  } catch (error) {
    throw error;
  }
}
