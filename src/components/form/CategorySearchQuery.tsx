import Image from "next/image";

function CategorySearchQuery({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) {
  return (
    <>
      <div className="border-b p-4 border-[#E1EBE1]">
        <div className="mb-4">
          <div className="px-4 py-3 bg-[#E1EBE1]/50 rounded-full border border-[#E1EBE1] flex items-center">
            <Image
              src={"/icons/search-normal.svg"}
              alt="Search"
              width={18}
              height={18}
            />
            <input
              type="text"
              placeholder="Search By Category"
              className="text-[#282E20] ml-3 text-[14px] w-full placeholder-[#7C827D] bg-transparent outline-none"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);

                console.log("Search Query", searchQuery);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorySearchQuery;
