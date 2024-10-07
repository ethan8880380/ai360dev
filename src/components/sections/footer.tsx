import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="w-full py-16 sm:px-10 px-5 pb-0 bg-gray-900 text-white">
        <a
          href="/"
          title={siteConfig.name}
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo className="w-auto h-[40px]" />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </a>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-8">
          {siteConfig.footer.map((section, index) => (
            <div key={index} className="mb-5">
              <h2 className="font-semibold text-gray-300">{section.title}</h2>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="my-2">
                    <Link
                      href={link.href}
                      className="group inline-flex cursor-pointer items-center justify-start gap-1 text-gray-400 duration-200 hover:text-white hover:opacity-90"
                    >
                      {link.icon && link.icon}
                      {link.text}
                      <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto border-t border-gray-700 py-2 grid md:grid-cols-2 h-full justify-between w-full grid-cols-1 gap-1">
          <span className="text-sm tracking-tight text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer hover:text-white">
              {siteConfig.name}
            </Link>{" "}
            - {siteConfig.description}
          </span>
          <ul className="flex justify-start md:justify-end text-sm tracking-tight text-gray-400">
            <li className="mr-3 md:mx-4">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="mr-3 md:mx-4">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
