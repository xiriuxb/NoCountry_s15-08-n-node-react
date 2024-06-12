export const parsePoint = (point) => {
  if (point.name.startsWith("{")) {
    const p = JSON.parse(point.name);
    return { ...point, name: p.name, type: p.type };
  }
  return point;
};
