import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AugmentedMedia, ResultSetAugmented } from "../../types";
import { augmentResults } from "../../utils";
import MediaItem from "../../components/media-item";
import Link from "next/link";

export default function MediaDetails() {
  const [data, setData] = useState<ResultSetAugmented>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      const url = `https://itunes.apple.com/lookup?id=${id}`;
      const responseRaw = await fetch(url);
      const response = await responseRaw.json();
      const augmentedResultSet: ResultSetAugmented = augmentResults(response);
      setData(augmentedResultSet);
    }
    if (id) {
      fetchData();
    }
  }, [id]);
  return (
    <>
      {data?.results[0] && (
        <>
          <div className="grid min-h-[100dvh] w-screen content-center justify-center">
            <MediaItem el={data?.results[0]} isOnSearchPage={false} />
          </div>
        </>
      )}
    </>
  );
}
