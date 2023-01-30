import {
  Container,
  Value,
  Subtitle,
  StatisticsInfoTypeStyleProps,
} from "./styles";

type Props = {
  value: number;
  subtitle: string;
  type?: StatisticsInfoTypeStyleProps;
};

export function StatisticsInfo({ type, value, subtitle }: Props) {
  return (
    <Container type={type}>
      <Value>{value}</Value>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
