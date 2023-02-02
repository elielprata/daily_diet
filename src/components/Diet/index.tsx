import { useState } from "react";
import { Button, Buttons, Container, Status, Text, TextButton } from "./styles";

type Props = {
  defineStatus: (status: boolean) => void;
};

type ButtonSelectedProps = "YES" | "NO" | "";

export function Diet({ defineStatus }: Props) {
  const [selected, setSelected] = useState<ButtonSelectedProps>("");

  function handleSelect(status: boolean) {
    defineStatus(status);

    status === true ? setSelected("YES") : setSelected("NO");
  }
  return (
    <Container>
      <Text>Está dentro da dieta?</Text>

      <Buttons>
        {selected === "YES" ? (
          <Button onPress={() => handleSelect(true)} type="PRIMARY">
            <Status status={true} />
            <TextButton>Sim</TextButton>
          </Button>
        ) : (
          <Button onPress={() => handleSelect(true)}>
            <Status status={true} />
            <TextButton>Sim</TextButton>
          </Button>
        )}

        {selected === "NO" ? (
          <Button onPress={() => handleSelect(false)} type="SECONDARY">
            <Status status={false} />
            <TextButton>Não</TextButton>
          </Button>
        ) : (
          <Button onPress={() => handleSelect(false)}>
            <Status status={false} />
            <TextButton>Não</TextButton>
          </Button>
        )}
      </Buttons>
    </Container>
  );
}
