const PostButtonComponent = ({
  loading,
  disabled,
  onClick,
  text = "Guardar",
  className = "",
}) => {
  return (
    <button
      className={`btn btn-primary ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        `${text}`
      )}
    </button>
  );
};

export default PostButtonComponent;
