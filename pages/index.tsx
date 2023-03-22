import Background from "../components/background";

import { ChangeEvent, useEffect, useRef, useState } from "react";
// import MediaItem from "../components/media-item";
import MediaItem from "../components/media-item";
import { ResultSetAugmented } from "../types";
import { augmentResults } from "../utils";
import Head from "next/head";

export default function Home() {
  const dataProcessed = useRef(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("iTunes Search");

  const [data, setData] = useState<ResultSetAugmented>();

  useEffect(() => {
    const url = `https://itunes.apple.com/search?term=${searchQuery}&country=au&entity=album`;

    async function fetchData() {
      const responseRaw = await fetch(url);
      const response = await responseRaw.json();

      // sort by release date
      response.results.sort((a: any, b: any) => {
        return (
          new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        );
      });

      const augmentedResultSet: ResultSetAugmented = augmentResults(response);

      dataProcessed.current = true;
      setData(augmentedResultSet);
      setPageTitle(
        `${augmentedResultSet.resultCount} results for ${searchQuery}`
      );
    }
    if (searchQuery && searchQuery.length > 0) {
      fetchData();
    }
  }, [searchQuery]);

  const onSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      setData({
        resultCount: 0,
        results: [],
      });
      setPageTitle("iTunes Search");
    }
    const debounceTimer = setTimeout(async () => {
      setSearchQuery(e.target.value);
    }, 1000);
    return () => clearTimeout(debounceTimer);
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Background />
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-3 py-3 pt-16 align-middle">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"
                placeholder="Search for albums, artists, or songs"
                onChange={onSearchChange}
              />
            </div>
            <div className="w-full rounded-lg bg-gray-50 p-3 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-300">
              {(data &&
                data?.resultCount > 0 &&
                `${data?.resultCount} result(s) found`) ||
                `⬆️ Please enter a search term to begin ⬆️`}
            </div>
            <div className="flex-auto">
              <div className="justify-cente grid content-start">
                <div className="mx-auto max-w-7xl overflow-hidden">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {dataProcessed &&
                      data?.results.map((el, index) => (
                        <MediaItem key={index} el={el} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
