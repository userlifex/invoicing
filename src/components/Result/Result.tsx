import { useTime } from "../../context/TimeContext";
import "./Result.css";

export const Result = () => {
  const { timeDecimal, hours, minutes, seconds, month, total, price } =
    useTime();
  return (
    <div className="result">
      <div className="center-layout">
        <p>
          POR PRESTACION DE SERVICIOS DE DESARROLLO DE SOFTWARE POR UN TOTAL DE
          {` ${timeDecimal}`}HORAS ({hours}H {minutes}M {seconds}S),CON UN
          PRECIO POR HORA DE {price}.00 DOLARES AMERICANOS CORRESPONDIENTE AL
          MES DE
          {` ${month?.toUpperCase()}`} DEL 2022 Y REEMBOLSO DE COMISION BANCARIA
          POR 2O USD
        </p>
      </div>
      <div className="center-layout total">
        <p>TOTAL : {total} </p>
      </div>
      <div className="center-layout total">
        <p>TOTAL MAS COMISION : {total ? total + 20 : 0} </p>
      </div>
    </div>
  );
};
