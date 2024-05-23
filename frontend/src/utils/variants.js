export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 250 : direction === 'down' ? -250 : 0,
      opacity: 0,
      x: direction === 'left' ? 250 : direction === 'right' ? -250 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
