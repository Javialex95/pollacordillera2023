export const TitleWithDescription = ({ title, description }) => {
  return (
    <div className="pb-4 max-w-[60%] ">
      <h3 className="pb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
