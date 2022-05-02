import { useTime } from "../../context/TimeContext";
import { Text } from "../input/Text";

export const Month = () => {
  const { handleMonth, handlePrice } = useTime();

  const onMonthChange = (input: string) => {
    handleMonth && handleMonth(input);
  };

  const onPriceChange = (input: string) => {
    handlePrice && handlePrice(+input);
  };

  return (
    <div className="center-layout">
      <Text
        callback={onMonthChange}
        containerSize="lg"
        label="Month"
        showLabel={true}
      />
      <Text
        callback={onPriceChange}
        containerSize="sm"
        label="Price"
        showLabel={true}
      />
    </div>
  );
};
