export const PrimaryButton = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-800 text-white py-2 px-4 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`border border-green-800 text-green-800 py-2 px-4 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};