export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      createMeal: undefined;
      editMeal: {
        meal;
      };

      feedback: {
        feedback: "POSITIVE" | "NEGATIVE";
      };
      infoMeal: {
        meal;
      };
    }
  }
}
