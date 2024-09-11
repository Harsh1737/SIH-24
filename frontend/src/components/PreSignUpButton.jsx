
const PreSignupButton = ({ role, setRole, setBtnText, imageSrc, altText, buttonText, currentRole, borderColor }) => {
  return (
    <button
      onClick={() => {
        setRole(role);
        setBtnText(buttonText);
      }}
      className={`border-2 sm:border-3 shadow-lg p-4 sm:p-6 h-auto w-full sm:w-[300px] rounded-xl transition-transform duration-300 ease-in-out
        ${currentRole === role ? borderColor : 'border-black'} hover:scale-105`}
    >
      <img
        className="object-contain mx-auto"
        width="80"
        height="80"
        src={imageSrc}
        alt={altText}
      />
      <p className="text-center">{buttonText}</p>
    </button>
  );
};

export default PreSignupButton;
