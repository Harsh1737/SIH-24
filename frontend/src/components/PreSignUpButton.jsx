import PropTypes from "prop-types";

const RoleButton = ({
  role,
  setRole,
  setBtnText,
  imageSrc,
  altText,
  buttonText,
  currentRole,
  borderColor,
}) => {
  const handleClick = () => {
    setRole(role);
    setBtnText(buttonText);
  };

  const isActive = currentRole === role;
  const buttonClasses = `border-2 sm:border-3 shadow-lg p-4 sm:p-6 h-auto w-full sm:w-[300px] rounded-xl transition-transform duration-300 ease-in-out 
    ${
      isActive ? borderColor : "border-black"
    } hover:scale-105 hover:bg-blue-200`;

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
      aria-pressed={isActive}
    >
      <img
        className="object-contain mx-auto"
        width="80"
        height="80"
        src={imageSrc}
        alt={altText}
      />
      <p className="text-center mt-2 text-lg font-medium">{buttonText}</p>
    </button>
  );
};

export default RoleButton;
