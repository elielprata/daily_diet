import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Container, FeedbackText, Image, Text } from "./styles";

import positive_feedback from "@assets/positive_feedback.png";
import negative_feedback from "@assets/negative_feedback.png";

type RouteParams = {
  feedback: "POSITIVE" | "NEGATIVE";
};

export function Feedback() {
  const route = useRoute();
  const { feedback } = route.params as RouteParams;
  const { navigate } = useNavigation();

  return (
    <Container>
      {feedback === "POSITIVE" && (
        <>
          <FeedbackText feedback={feedback}>Continue assim!</FeedbackText>
          <Text>
            Você continua{" "}
            <Text style={{ fontWeight: "bold" }}>dentro da dieta</Text>. Muito
            bem!
          </Text>

          <Image source={positive_feedback} />
        </>
      )}

      {feedback === "NEGATIVE" && (
        <>
          <FeedbackText feedback={feedback}>Que pena!</FeedbackText>
          <Text>
            Você <Text style={{ fontWeight: "bold" }}>saiu da dieta</Text> dessa
            vez, mas continue se esforçando e não desista!
          </Text>

          <Image source={negative_feedback} />
        </>
      )}

      <Button
        title="Ir para a página inicial"
        onPress={() => navigate("home")}
      />
    </Container>
  );
}
