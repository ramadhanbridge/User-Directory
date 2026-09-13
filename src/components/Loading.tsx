const Loading = () => {
  return (
    <div
      className="flex min-h-[50vh] w-full items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#3b6dae]/20 border-t-[#3b6dae]" />
    </div>
  );
};

export default Loading;
