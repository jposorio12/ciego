import { useEffect, useState } from "react";
import { NetworkSelector } from "../../../Redux/Slices/Network";
import { useSelector } from "react-redux";

const useHeaderCount = () => {
  const { isOnline } = useSelector(NetworkSelector);
  const [date, setDate] = useState({ first: "", second: "" });
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const getDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = months[now.getMonth()];
    const day = now.getDate();
    const hour = now.getHours() % 12 || 12;
    const amPm = now.getHours() >= 12 ? "PM" : "AM";
    const minute = now.getMinutes();
    const dayWeek = days[now.getDay()];
    setDate({
      first: `${dayWeek}, ${day} de ${month} de ${year},`,
      second: `${hour}:${minute} ${amPm}`,
    });
  };

  useEffect(() => {
    getDate();
  }, [isOnline]);

  return { date, isOnline };
};

export default useHeaderCount;
