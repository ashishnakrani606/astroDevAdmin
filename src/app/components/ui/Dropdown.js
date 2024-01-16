import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarDropdown({ children, className, itemsclass, dropdownitem, button }) {
  return (
    <>
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className={`${className}`}>{button}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute z-[999] overflow-hidden min-w-fit sm:!w-full right-0 p-2 block mt-2 origin-top-right divide-y divide-black/5 dark:divide-white/10 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black/5 focus:outline-none ${itemsclass}`}
          >
            {children}
            {dropdownitem.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a onClick={item.onClick}
                    href={item.link}
                    className={classNames(
                      active ? "bg-black/5 dark:bg-white/20 rounded-lg" : "",
                      "group flex gap-3 items-center px-2 py-2 text-sm"
                    )}
                  >
                    {item.icon ? <Image src={item.icon} alt="" className="dark:invert" /> : ""}
                    <span className="sm:whitespace-nowrap text-black">
                      {item.title}
                    </span>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
