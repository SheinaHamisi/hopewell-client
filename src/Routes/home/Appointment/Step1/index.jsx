import CheckOut from "./../CheckOut";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../../../features/Slice/apointment/apointment.async";
import Div from "../../components/Div";
import { toast } from "react-toastify";

export default function Example() {
  const appointment = useSelector((state) => state.appointment);
  const [locationList, setLocationList] = useState();
  const [service, setService] = useState();
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!service) return;
    setLocationList(service?.locations_price);
  }, [service]);

  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service || !location || !date) {
      return toast.error(
        `Please select ${
          !service
            ? "Service type"
            : !location
            ? "Service Location"
            : !date
            ? "Date"
            : "err"
        }`
      );
    }
  };
  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <CheckOut step1 />
        <h1 className="mt-4 mb-3 text-2xl font-bold  tranking-wide text-center">
          Service Selection
        </h1>

        {appointment?.services && (
          <div className="grid w-full grid-cols-2 gap-x-14">
            <div className="col-span-1">
              <Selector
                selected={service}
                data={appointment?.services}
                text="Please select Service"
                setSelected={setService}
              />
            </div>
            <div className="col-span-1 ">
              <Selector
                data={locationList}
                selected={location}
                setSelected={setLocation}
                text="Please select Service Location"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 mt-8">
            <p className="mb-3"> Apointment Date </p>
            <DateTimePickerComponent
              id="datetimepicker"
              placeholder="please select the Date and Time"
              strictMode={true}
              min={
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth(),
                  new Date().getDate() + 2
                )
              }
              required
              strictMode={true}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full mt-6 py-4 flex justify-end">
          <button
            type="submit"
            className="bg-primary text-lg px-4 py-3 flex items-center justify-between rounded text-white"
          >
            Next <ArrowCircleRightIcon className="ml-4 h-6 " />
          </button>
        </div>
      </form>
    </Div>
  );
}

const Selector = ({ selected, setSelected, data, text }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <p className="text-gray-900 text-lg mb-3"> {text}</p>
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-100 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span className="block truncate">
            {selected?.name
              ? selected?.name
              : selected?.location
              ? selected?.location
              : "Please select"}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data?.map((item, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={item}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {item?.name ? item?.name : item?.location}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-amber-600" : "text-amber-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
