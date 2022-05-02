import { useTime } from "../../context/TimeContext";
import { Text } from "../input/Text";
import "./Time.css";
export const Time = () => {
  const { setHours, setMinutes, setSeconds } = useTime();

  const handleHours = (hours: string) => {
    setHours(+hours);
  };

  const handleMinutes = (minutes: string) => {
    setMinutes(+minutes);
  };

  const handleSeconds = (seconds: string) => {
    setSeconds(+seconds);
  };

  return (
    <div className="center-layout">
      <Text callback={handleHours} label="HH" placeholder="HH" maxLength={3} />
      <Text
        callback={handleMinutes}
        label="MM"
        placeholder="MM"
        maxLength={2}
      />
      <Text
        callback={handleSeconds}
        label="SS"
        placeholder="SS"
        maxLength={2}
      />
    </div>
  );
};
