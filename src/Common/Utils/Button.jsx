export const Button = ({ styles, text }) => {
  return (
    <div
      className={`cursor-pointer block pb-2 font-frente w-fit  px-12 py-1 m-auto duration-500 lg:text-xl lg:hover:text-2xl lg:hover:bg-negro  lg:hover:text-crema  ${styles}`}
    >
      <span>{text}</span>
    </div>
  );
};
