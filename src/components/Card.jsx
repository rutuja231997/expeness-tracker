const Card = ({ text, data, icon: Icon, iconBgColor, iconColor, loading }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md border border-gray-200 flex justify-between items-start">
      {/* left side */}
      <div className="space-y-3">
        {loading ? (
          <>
            {/* title skeleton */}
            <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />

            {/* amount skeleton */}
            <div className="h-8 w-32 rounded bg-gray-200 animate-pulse" />
          </>
        ) : (
          <>
            <h3 className="text-gray-600 text-base font-medium">{text}</h3>

            <p className="text-2xl font-bold text-gray-900">{data}</p>
          </>
        )}
      </div>

      {/* icon */}
      {loading ? (
        <div className="h-14 w-14 rounded-full bg-gray-200 animate-pulse" />
      ) : (
        Icon && (
          <div className={`${iconBgColor} rounded-full p-4`}>
            <Icon size={24} color={iconColor} />
          </div>
        )
      )}
    </div>
  );
};

export default Card;
