const PrivateLayout = ({ children, Header, className }) => {
  return (
    <main
      className={`bg-[#E8E8E8] min-h-screen w-full pb-[30px] relative ${className}`}
    >
      {Header}
      {children}
    </main>
  );
};

export default PrivateLayout;
