import { convertToSectionList } from "@utils/convertToSectionList";
import { mealsGetAll } from "./mealsGetAll";

export async function mealsGetSectionList() {
  try {
    const meals = await mealsGetAll();
    console.log(meals);
    const mealsSectionList = await convertToSectionList(meals, "date");

    return mealsSectionList;
  } catch (error) {
    throw error;
  }
}
