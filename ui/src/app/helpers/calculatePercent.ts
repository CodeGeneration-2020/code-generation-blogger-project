export default function (calculate_value: number, from_Value: number): number {
  return Math.round((calculate_value / from_Value) * 100);
}
