  const setAnimationType = (animate) =>{
    if (typeof animate === 'string') {
      return animate;
    }
    if (animate) {
      return 'animate-heroHorizontalCard';
    }
    return '';
  }

const HeroCardComponent = ({
  title,
  description,
  btnText,
  animationSeconds,
  animate,
  onClickButton,
}) => {

  return (
    <div
      className={`card text-slate-300 w-96 bg-zinc-800 bg-opacity-85 backdrop-blur-xs shadow-personal ${setAnimationType(animate)}`}
      style={{ animationDuration: animationSeconds }}
    >
      <div className="card-body">
        <h2 className="card-title">{title ? title : "Card title!"}</h2>
        {description && <p>{description}</p>}
        {btnText && (
          <div className="card-actions justify-end">
            <button
              onClick={onClickButton}
              className="btn text-slate-300 btn-primary bg-zinc-700"
            >
              {btnText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroCardComponent;
