import Link from "next/link";
import { useRouter } from "next/router";

import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  CpuChipIcon,
  XMarkIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

function classNames(...args: (string | undefined)[]) {
  const classNames = args
    .filter((className) => className !== undefined)
    .join(" ")
    .trim();
  return classNames;
}

const navigation = [{ name: "Home", href: "/" }];

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <div className="h-0.5 bg-amber-500"></div>
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="bg-white shadow dark:border dark:border-zinc-800 dark:bg-zinc-900">
                {/* limited width */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  {/* full width */}
                  {/* <div className="px-4 sm:px-6 lg:px-8"> */}
                  <div className="relative flex h-12 justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 focus:outline-none dark:hover:bg-zinc-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                        <MusicalNoteIcon className="mr-4 block h-6 w-6 text-amber-500" />

                        <Link
                          href="/"
                          className="font-semibold text-zinc-900 dark:text-white"
                        >
                          iTunes Search
                        </Link>
                      </div>
                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {navigation.map((el, i) => (
                          <Link
                            href={el.href}
                            key={i}
                            className={classNames(
                              router.pathname == el.href
                                ? "border-amber-500 text-zinc-900 dark:text-white"
                                : "border-transparent text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 hover:dark:text-zinc-300",
                              "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium "
                            )}
                            aria-current={
                              router.pathname == el.href ? "page" : undefined
                            }
                          >
                            {el.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 pt-2 pb-4">
                    {navigation.map((el, i) => (
                      <Link href={el.href} key={i}>
                        <Disclosure.Button
                          className={classNames(
                            router.pathname == el.href
                              ? "border-amber-500 text-zinc-900 dark:text-white"
                              : "border-transparent text-zinc-500 dark:text-zinc-400",
                            "block w-full border-l-4 py-2 pl-3 pr-4 text-left text-base font-medium"
                          )}
                          aria-current={
                            router.pathname == el.href ? "page" : undefined
                          }
                        >
                          {el.name}...
                        </Disclosure.Button>
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
