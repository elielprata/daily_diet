import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealEdit(meal: any) {
  try {
    const storedMeals = await mealsGetAll();

    const mealEdited = storedMeals.map((item) =>
      item.id === meal.id ? meal : item
    );

    const storage = JSON.stringify(mealEdited);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
