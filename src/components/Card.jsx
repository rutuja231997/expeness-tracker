const Card = ({ text, data, icon: Icon, iconBgColor, iconColor }) => {
  return (
    <div
      className="
        bg-white
        p-5
        rounded-2xl
        shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md
        border
        border-gray-200
        flex
        justify-between
        items-start
      "
    >
      {/* left side */}
      <div className="space-y-2">
        <h3 className="text-gray-600 text-base font-medium">{text}</h3>

        <p className="text-2xl font-bold text-gray-900">{data}</p>
      </div>

      {/* icon */}
      {Icon && (
        <div
          className={`
            ${iconBgColor}
            rounded-full
            p-4
          `}
        >
          <Icon size={24} color={iconColor} />
        </div>
      )}
    </div>
  );
};

export default Card;
