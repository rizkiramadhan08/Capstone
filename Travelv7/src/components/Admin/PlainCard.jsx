const PlainCard = ({ title, description, className = "", ...props }) => {
    return (
      <div
        className={`bg-white rounded-3xl shadow-lg border border-[#E5E7EB] w-full ${className}`}
        {...props}
      >
        <div className="p-4 flex flex-row items-start gap-3">
          <div className="space-y-3">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlainCard;
  