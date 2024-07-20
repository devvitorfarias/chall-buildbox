import { ChevronLeft, X } from "lucide-react";

export const HEADER_MENU_ITEMS = [
  {
    title: "Portfolio",
    link: "/portifolio",
    groupName: "group/portfolio",
  },
  {
    title: "Who we are",
    link: "/wwa",
    groupName: "group/wwa",
  },
  {
    title: "What we do",
    link: "/wwd",
    groupName: "group/wwd",
    subMenu: () => (
      <section className="flex items-center gap-6">
        <section className="grid text-white grid-cols-1 grow sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fill gap-4">
          <div>
            <button className="text-base font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
              Web & AI
            </button>
            <hr class="h-px my-2 border-0 bg-white" />
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Website Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                App Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Software Development
              </li>
            </ul>
          </div>
          <div>
            <button className="text-base font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
              Web & AI
            </button>
            <hr class="h-px my-2 border-0 bg-white" />
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Website Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                App Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Software Development
              </li>
            </ul>
          </div>
          <div>
            <button className="text-base font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
              Web & AI
            </button>
            <hr class="h-px my-2 border-0 bg-white" />
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Website Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                App Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Software Development
              </li>
            </ul>
          </div>
          <div>
            <button className="text-base font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
              Web & AI
            </button>
            <hr class="h-px my-2 border-0 bg-white" />
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Website Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                App Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Software Development
              </li>
            </ul>
          </div>

          <div>
            <button className="text-base font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
              Interior Design
            </button>
            <hr class="h-px my-2 border-0 bg-white" />
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Bathroom
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Bathroom
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Bathroom
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Bathroom
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Bathroom
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                App Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Software Development
              </li>
            </ul>
          </div>
          <div>
            <button className="text-base font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
              Web & AI
            </button>
            <hr class="h-px my-2 border-0 bg-white" />
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Website Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                App Design & Development
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Software Development
              </li>
            </ul>
          </div>
        </section>
        <div className="max-w-[730px] w-full"></div>
      </section>
    ),
    responsiveSubMenu: ({ onClose }) => {
      return (
        <div className="w-full">
          <header className="flex items-center w-full justify-between mb-6 h-[60px]">
            <button className="flex items-center gap-2 text-3xl" onClick={() => {
              onClose();
            }}>
              <ChevronLeft />
              What we do
            </button>
            <button
              className="flex items-center gap-2"
              onClick={() => {
                onClose();
              }}
            >
              <X  size={30} />
            </button>
          </header>

          <section className="flex flex-col gap-6 overflow-auto overflow-x-hidden max-h-[calc(100vh-60px)] pb-4 scroll">
            <div>
              <button className="text-lg font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 text-base">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className="text-lg font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 text-base">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className="text-lg font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 text-base">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className="text-lg font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 text-base">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className="text-lg font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 text-base">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className="text-lg font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 text-base">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className="text-lg font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 text-base">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className="text-lg font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 text-base">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    title: "References",
    link: "/references",
    groupName: "group/references",
  },
  {
    title: "Contact us",
    link: "/contact",
    groupName: "group/contact",
  },
];
