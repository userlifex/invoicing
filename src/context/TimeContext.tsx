import { createContext, useState, useContext, useEffect } from "react";

interface ITimeContext {
  setHours: (input: number) => void;
  setMinutes: (input: number) => void;
  setSeconds: (input: number) => void;
  timeDecimal: number;
  total?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  month?: string;
  handleMonth?: (input: string) => void;
  handlePrice?: (input: number) => void;
  price?: number;
}

function dummyFunction() {
  //
}

const TimeContext = createContext<ITimeContext>({
  setHours: () => dummyFunction,
  setMinutes: () => dummyFunction,
  setSeconds: () => dummyFunction,
  timeDecimal: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  month: "",
});

export const TimeProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [month, setMonth] = useState("");
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const [timeDecimal, setTimeDecimal] = useState(0);

  useEffect(() => {
    const { hours, minutes, seconds } = time;

    const decimal = (hours * 60 * 60 + minutes * 60 + seconds) / (60 * 60);

    setTimeDecimal(+decimal.toFixed(2));
  }, [time]);

  useEffect(() => {
    console.log("changing total");
    const result = timeDecimal * price;
    setTotal(+result.toFixed(2));
    console.log(total);
  }, [timeDecimal, price]);

  const handleMonth = (input: string) => {
    setMonth(input);
  };

  const handlePrice = (input: number) => {
    setPrice(input);
  };

  const setHours = (hours: number) => {
    setTime({
      ...time,
      hours,
    });
  };

  const setMinutes = (minutes: number) => {
    setTime({
      ...time,
      minutes,
    });
  };

  const setSeconds = (seconds: number) => {
    setTime({
      ...time,
      seconds,
    });
  };

  return (
    <TimeContext.Provider
      value={{
        setHours,
        setMinutes,
        setSeconds,
        timeDecimal,
        price,
        month,
        handlePrice,
        handleMonth,
        total,
        ...time,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => useContext(TimeContext);
