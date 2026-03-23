"use client";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2 mt-10 sm:mt-12 flex-wrap">

      {/* PREV */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg 
        border border-blue-200 text-[#0046FF] disabled:opacity-40
        hover:bg-blue-50 transition"
      >
        Prev
      </button>

      {/* FIRST PAGE */}
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg 
            border border-blue-200 text-[#0046FF] hover:bg-blue-50 transition"
          >
            1
          </button>

          {visiblePages[0] > 2 && (
            <span className="px-1 sm:px-2 text-gray-400 text-xs sm:text-sm">...</span>
          )}
        </>
      )}

      {/* VISIBLE PAGES */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg font-medium transition
            ${
              currentPage === page
                ? "bg-[#0046FF] text-white"
                : "border border-blue-200 text-[#0046FF] hover:bg-blue-50"
            }`}
        >
          {page}
        </button>
      ))}

      {/* LAST PAGE */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-1 sm:px-2 text-gray-400 text-xs sm:text-sm">...</span>
          )}

          <button
            onClick={() => onPageChange(totalPages)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg 
            border border-blue-200 text-[#0046FF] hover:bg-blue-50 transition"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* NEXT */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg 
        border border-blue-200 text-[#0046FF] disabled:opacity-40
        hover:bg-blue-50 transition"
      >
        Next
      </button>

    </div>
  );
}