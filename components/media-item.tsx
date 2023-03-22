import Link from "next/link";
import Image from "next/image";
import { AugmentedMedia } from "../types";
import React from "react";
import Head from "next/head";

export default function MediaItem({ el }: { el: AugmentedMedia }) {
  return (
    <React.Fragment>
      <div
        key={el.trackId}
        className="flex flex-col justify-between rounded-lg border border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-800"
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          passHref
          href={`${el.collectionViewUrl}`}
          className="cursor-default"
        >
          <Image
            src={el.artworkUrl256 || el.artworkUrl100}
            alt={el.trackName || el.collectionName}
            className={`h-60 w-full cursor-pointer rounded-t-lg object-cover transition duration-75 ease-in-out hover:brightness-150`}
            width={100}
            height={100}
          />
        </Link>
        <div className="p-5">
          <h5 className="mb-2 truncate text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {el.trackName || el.collectionName || ""}
          </h5>
          <p className="mb-3 truncate font-semibold text-zinc-700 dark:text-zinc-400">
            {el.artistName}
          </p>
          <p className="mb-3 text-sm font-normal text-zinc-700 dark:text-zinc-400">
            {el.releaseDate &&
              new Date(el.releaseDate.substring(0, 10)).toLocaleDateString([], {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
          </p>
          <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800">
            {el.primaryGenreName}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
