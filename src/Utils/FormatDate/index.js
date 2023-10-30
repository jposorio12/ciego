const FormatDate = () => {
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
    const minute = now.getMinutes()?.toString()?.padStart("2", 0);
    const dayWeek = days[now.getDay()];
    return {
      first: `${dayWeek}, ${day} de ${month} de ${year},`,
      second: `${hour}:${minute} ${amPm}`,
    };
  };

  const dateInline = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear() % 100;

    return `${day}/${month}/${year}`;
  };

  return { getDate, dateInline };
};

export default FormatDate;
