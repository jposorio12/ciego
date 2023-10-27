import useLayouts from "../../Layouts";
import logo from "../../../Assets/Logo.png";
import user from "../../../Assets/Avatar.png";
import lock from "../../../Assets/lockLogin.png";
import arrow from "../../../Assets/ArrowRight.png";
import arrowDisable from "../../../Assets/ArrowRightDisable.png";
import check from "../../../Assets/arrowCheck.png";
import hide from "../../../Assets/eyeOff.png";
import eyeOn from "../../../Assets/Eye.png";
import atentionSign from "../../../Assets/atentionSignLogin.png";
import useComponents from "../../Components";
import useScreenControllers from "../../../Controllers/ScreenControllers";

const Login = () => {
  const { PublicLayout } = useLayouts();
  const { InputDefault, ButtonDefault } = useComponents();

  const { useLogin } = useScreenControllers();
  const {
    loginForm,
    passwordValue,
    emailValue,
    submitForm,
    updateValueEmail,
    updateValuePassword,
  } = useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = loginForm;

  return (
    <PublicLayout>
      <img className="mx-auto pt-[198px]" src={logo} alt="logo" />
      <form
        className="mt-[20px] flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(submitForm)();
        }}
      >
        <InputDefault
          control={control}
          name="email"
          defaultValue=""
          type="text"
          value={emailValue}
          label={
            <p className="font-inter text-[14px] font-bold">
              Usuario <span className="text-[#FFC610]">*</span>
            </p>
          }
          classNameContainerInput="h-[45px] w-full border-[2px] border-solid rounded-[4px] border-[#A6A6A6] flex items-center px-[16px] py-[8px] gap-[6px]"
          classNameInput="h-full w-full outline-none font-inter font-bold text-[14px] placeholder:text-[#ffffffcc]
          placeholder:pl-[4px] bg-transparent"
          classNameContainer="w-[90%] max-w-[400px] mx-auto flex flex-col justify-center text-white gap-[4px] mb-[16px]"
          placeholder="Ingresa tu número de usuario"
          icon={user}
          iconRight={
            !errors?.email?.message
              ? emailValue?.length > 0 && check
              : atentionSign
          }
          updateValue={updateValueEmail}
          errors={errors}
        />

        <InputDefault
          control={control}
          name="password"
          defaultValue=""
          value={passwordValue}
          label={
            <p className="font-inter text-[14px] font-bold">
              Contraseña <span className="text-[#FFC610]">*</span>
            </p>
          }
          classNameContainerInput="h-[45px] w-full border-[2px] border-solid rounded-[4px] border-[#A6A6A6] flex items-center px-[16px] py-[8px] gap-[6px]"
          classNameInput="h-full w-full outline-none font-inter font-bold text-[14px] text-white placeholder:text-[#ffffffcc]
          placeholder:pl-[4px] bg-transparent"
          classNameContainer="w-[90%] max-w-[400px] mx-auto flex flex-col justify-center text-white gap-[4px] mb-[150px]"
          placeholder="Ingresa tu contraseña"
          icon={lock}
          iconRight={hide}
          iconEye={eyeOn}
          updateValue={updateValuePassword}
          errors={errors}
        />

        <ButtonDefault
          text="Ingresar"
          icon={!isValid ? arrowDisable : arrow}
          classNameButton={`${
            !isValid ? "bg-[#79797933]" : "bg-[#FFC610]"
          } rounded-[32px] flex items-center justify-center w-[80%] max-w-[400px] h-[64px] gap-[10px] mb-[20px] ${
            !isValid ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={!isValid}
          classNameSpan={`${
            !isValid ? "text-[#797979cc]" : "text-[#0C2047]"
          } font-inter font-bold text-[18px]`}
        />
      </form>
    </PublicLayout>
  );
};

export default Login;
