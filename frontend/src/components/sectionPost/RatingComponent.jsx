import { FaStar } from "react-icons/fa";

const RatingComponent = ({ ratingValue }) => {
  const ratingIntValue = Math.round(ratingValue);
  return (
    <div className="flex items-baseline">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={`ro-${starValue}`}
            className={` ${
              starValue <= ratingIntValue ? "fill-yellow-400" : "fill-slate-600"
            }`}
          />
        );
      })}

      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {ratingValue}
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        out of
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        5
      </p>
    </div>
  );
};

export default RatingComponent;
