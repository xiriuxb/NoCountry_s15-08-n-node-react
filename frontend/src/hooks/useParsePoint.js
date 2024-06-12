import { useMemo } from "react";

const useParsePoint = (point) => {
  const parsedPoint = useMemo(() => {
    if (point.name && point.name.startsWith("{")) {
      const p = JSON.parse(point.name);
      return { ...point, name: p.name, type: p.type };
    }
    return point;
  }, [point]);

  return parsedPoint;
};

export default useParsePoint;
