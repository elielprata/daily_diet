export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      createMeal: undefined;
      feedback: {
        feedback: "POSITIVE" | "NEGATIVE";
      };
      infoMeal: {
        meal: {
          name: string;
        };
      };
    }
  }
}
