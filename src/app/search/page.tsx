import SearchItem from "@/components/searchItem/searchItem";

const Search = () => {
  return (
    <div className="p-5 w-full">
      <div className="bg-white rounded-[10px] pb-5  flex justify-start items-start flex-col w-full">
        <SearchItem
          seats={25}
          time="14:00 PM - 14:45 PM"
          duration="30m"
          link="/search/route"
          disabled={false}
        />
        <SearchItem
          seats={25}
          time="14:00 PM - 14:45 PM"
          duration="30m"
          link="/search/route"
          disabled={false}
        />
        <SearchItem
          seats={25}
          time="14:00 PM - 14:45 PM"
          duration="30m"
          link="/search/route"
          disabled={false}
        />
        <SearchItem
          seats={25}
          time="14:00 PM - 14:45 PM"
          duration="30m"
          link="/search/route"
          disabled={true}
        />
        <SearchItem
          seats={25}
          time="14:00 PM - 14:45 PM"
          duration="30m"
          link="/search/route"
          disabled={false}
        />
        <SearchItem
          seats={25}
          time="14:00 PM - 14:45 PM"
          duration="30m"
          link="/search/route"
          disabled={false}
        />
        <SearchItem
          seats={25}
          time="14:00 PM - 14:45 PM"
          duration="30m"
          link="/search/route"
          disabled={true}
        />
      </div>
    </div>
  );
};

export default Search;
