import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

interface Tv2_collapsibleProps {
  text: string;
  children?: JSX.Element;
}

export const Tv2_collapsible = ({
  text = "Du har også mulighed for at købe en eller to livekanaler med binding",
  children,
}: Tv2_collapsibleProps) => {
  return (
    <>
      <Disclosure
        as={"div"}
        className={`  max-w-1313 px-3`}
      >
        {({ open }) => (
          <>
            <div className=" flex gap-x-3 items-center py-4">
              <div>
                <Disclosure.Button className={` w-12 h-12 bg-white rounded-full relative`}>
                  <ChevronRightIcon className="  text-primary rotate-90 ui-open:-rotate-90 ui-open:transform " />
                </Disclosure.Button>
              </div>
              <span className=" font-medium leading-5">{text}</span>
            </div>
            <Transition
              enter="transition ease-in-out duration-400 transform"
              enterFrom=" scale-y-0"
              enterTo=" scale-y-full"
              leave="transition ease-in-out duration-400 transform"
              leaveFrom="scale-y-full"
              leaveTo=" scale-y-0"
            >
              <Disclosure.Panel className={"bg-dark_blue_col   "}>{children}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
};
