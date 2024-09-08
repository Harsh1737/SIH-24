
const HomeFeatureImage = ({ 
    childern, 
    className = "", 
    src, 
    alt, 
    ...props }) => {

    const defaultClassName ="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0";

  return (
    <img
      src={src}
      alt={alt}
      className={`${defaultClassName} ${className}`}
      {...props}
    />
  );
};

export default HomeFeatureImage;
