const WifiIcon = ({ isOnline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="1"
        cy="1"
        r="1"
        fill={`${isOnline ? "#05AE3E" : "#797979"}`}
        transform="matrix(1 0 0 -1 11 19)"
      ></circle>
      <path
        stroke={`${isOnline ? "#05AE3E" : "#797979"}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.192 10.264a10 10 0 00-16.178-.282m13.72 3.003a7 7 0 00-11.324-.198m8.047 2.492a3 3 0 00-4.853-.084"
      ></path>
    </svg>
  );
};

export default WifiIcon;
