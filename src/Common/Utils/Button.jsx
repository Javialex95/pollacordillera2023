
export const Button = ({styles, text}) => {
  return (
    <div className={`cursor-pointer block w-fit font-frente px-12 py-1 m-auto duration-500 lg:text-xl lg:hover:text-2xl lg:hover:bg-negro lg:hover:text-crema  ${styles}`}>
        <span>{text}</span>
    </div>
  )
}
