const ButtonDefault = ({
  text,
  icon,
  iconLeft,
  classNameButton,
  classNameSpan,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={classNameButton}
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {iconLeft && <img src={iconLeft} alt="icon" />}
      <span className={classNameSpan}>{text}</span>
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export default ButtonDefault;
