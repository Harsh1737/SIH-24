/* eslint-disable react/prop-types */

export default function FooterDiv({
  children,
  className = "flex-basis-[25%] min-w-[200px] mb-[20px]",
  ...props
}) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}
