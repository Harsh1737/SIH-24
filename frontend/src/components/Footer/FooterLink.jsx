
export default function FooterLink({
  children,
  className = "",
  ...props
}) {
  const defaultClassName = "text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]";

  return (
    <li
      className={`${defaultClassName} ${className}`}
      {...props}
    >
      {children}
    </li>
  );
}
