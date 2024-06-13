const SkeletonCardComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-2 bg-zinc-600/30 rounded-md my-4">
      <div className="flex gap-4 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-zinc-600/30"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-3 w-20 bg-zinc-600/30"></div>
          <div className="skeleton h-3 w-28 bg-zinc-600/30"></div>
        </div>
      </div>
      <div className="skeleton h-12 w-full bg-zinc-600/30"></div>
    </div>
  );
};

export default SkeletonCardComponent;
