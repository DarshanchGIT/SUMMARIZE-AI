export const SummaryCardSkeleton = () => {
  return (
    <div className="p-4 animate-pulse h-56 border-2 flex flex-col">
      <div className="p-0">
        <div className="flex items-center justify-between w-full overflow-hidden">
          {/* Left Section - Title */}
          <div className="flex items-center gap-2 overflow-hidden max-w-[calc(100%-80px)]">
            <div className="bg-gray-300 h-4 w-32 rounded-md"></div>
          </div>

          {/* Right Section - View Button */}
          <div className="bg-gray-300 w-14 h-6 rounded-md"></div>
        </div>

        {/* Date Section */}
        <div className="bg-gray-300 h-3 w-24 rounded-md mt-1"></div>
      </div>

      {/* Summary Content */}
      <div className="flex flex-col flex-grow p-0">
        <div className="space-y-2 mt-2 mb-4">
          <div className="bg-gray-300 h-4 w-full rounded-md"></div>
          <div className="bg-gray-300 h-4 w-11/12 rounded-md"></div>
          <div className="bg-gray-300 h-4 w-10/12 rounded-md"></div>
        </div>

        {/* Bottom Section - Badge & Delete Button */}
        <div className="flex justify-between items-center mt-auto pb-2">
          <div className="bg-gray-300 h-6 w-16 rounded-md"></div>
          <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
