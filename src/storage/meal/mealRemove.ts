import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealRemove(id: string) {
  try {
    const storedMeals = await mealsGetAll();

    const mealRemoved = storedMeals.filter((meal) => meal.id !== id);

    const storage = JSON.stringify(mealRemoved);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
