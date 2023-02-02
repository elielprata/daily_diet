import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
//import { AppError } from "@utils/AppError";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(newMeal: string) {
  try {
    const storedMeals = await mealsGetAll();

    const groupAlreadyExists = storedMeals.includes(newMeal);

    if (groupAlreadyExists) {
      return; //throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);

    //await AsyncStorage.removeItem(MEAL_COLLECTION);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
