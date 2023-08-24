import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

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
        className={` border-4 max-w-1313 px-3`}
      >
        <div className=" flex gap-x-3 items-center">
          <div>
            <Disclosure.Button className={` w-12 h-12 bg-white rounded-full`}>
              <ChevronRightIcon className="  text-primary rotate-90 ui-open:-rotate-90 ui-open:transform " />
            </Disclosure.Button>
          </div>
          <span className=" font-medium leading-5">{text}</span>
        </div>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel>{children}</Disclosure.Panel>
        </Transition>
      </Disclosure>
    </>
  );
};
