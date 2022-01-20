import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className=" overflow-hidden  h-auto grid grid-cols-1 md:grid-cols-5 pt-8 pb-16 px-4 border-t ">
      <div className="px-0 md:px-5 col-span-1 flex flex-col ">
        <img src="logo.png" className="h-24 w-24" alt="" />
        <span className="text-gray-600 text-md -mt-4">
          @ {new Date().getFullYear()} HopeWell
        </span>

        <h4 className="text-sm text-gray-600 flex">
          A project by{" "}
          <Link to="/" className="text-primary">
            Kantet
          </Link>{" "}
        </h4>
      </div>
      <section className="grid w-full grid-cols-2 md:grid-cols-4 mt-4 gap-x-4 col-span-4 ">
        <TheLinks
          data={[
            {
              title: "      About us",
              link: "home",
            },
            {
              title: "    Terms & License",
              link: "home",
            },
          ]}
          title="COMPANY"
        />

        <TheLinks
          data={[
            {
              title: "Teens",
              link: "home",
            },
            {
              title: "Teens",
              link: "home",
            },
            {
              title: " Teens",
              link: "home",
            },
          ]}
          title="SERVICES"
        />

        <TheLinks
          data={[
            {
              title: "Documentation",
              link: "home",
            },
            {
              title: "FAQ",
              link: "home",
            },
            {
              title: " Contact Us",
              link: "home",
            },
          ]}
          title="HELP & SUPPORT"
        />

        <TheLinks
          data={[
            {
              title: "Twitter",
              link: "home",
            },
            {
              title: "Facebook",
              link: "home",
            },
            {
              title: "Youtube",
              link: "home",
            },
          ]}
          title="SOCIAL MEDIA LINKS"
        />
      </section>
    </section>
  );
}

export default Footer;

const TheLinks = ({ title, data }) => {
  return (
    <div className="col-span-1 flex flex-col text-gray-500 ">
      <h2 className="text-gray-900 text-xl mb-3 font-semibold">{title}</h2>
      {data &&
        data?.map(({ link, title }) => (
          <Link
            className="hover:text-gray-900 text-md transition ease-in-out duration-300"
            to={link}
          >
            {title}
          </Link>
        ))}
    </div>
  );
};
