import { useNavigate } from "react-router-dom";

const PublicLayout = ({ children, iconGoBack }) => {
  const navigate = useNavigate();

  return (
    <main className="bg-black min-h-screen w-full pb-[30px]">
      {iconGoBack && (
        <img
          src={iconGoBack}
          alt="go back"
          className="py-[16px] px-[16px] cursor-pointer"
          onClick={() => navigate(-1)}
        />
      )}
      {children}
    </main>
  );
};

export default PublicLayout;
