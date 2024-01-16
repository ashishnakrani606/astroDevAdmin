import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Userid from "@/assets/images/users/main-user.png";
import dashboard from "@/assets/images/icon/dashboard.svg";
import customers from "@/assets/images/icon/customers.svg";
import StoreDetails from "@/assets/images/icon/store-details.svg";
import Closebtn from "@/assets/images/icon/closeicon.svg";
import Article from "@/assets/images/icon/article.svg";
import { useState } from "react";
import Accordion from "@/layouts/sidebars/vertical/Accordion";
import Dropdown from "../../../app/components/ui/Dropdown";
import User from "../../../assets/images/icon/user.svg";
import LogOut from "../../../assets/images/icon/logout.svg";
import Chats from "../../../assets/images/icon/chats.svg";
import NoteBook from "../../../assets/images/icon/notebook.svg";
import Blog from "../../../assets/images/icon/blog.svg";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Correct import
import { deleteCookie } from "cookies-next";

const Home = [
  {
    title: "Benefits",
    href: "/benefits",
    icon: StoreDetails,
  },
  {
    title: "Faq",
    href: "/faq",
    icon: dashboard,
  },
  {
    title: "User Reflection",
    href: "/user-reflection",
    icon: customers,
  },
  {
    title: "Articles",
    href: "/articles",
    icon: Article,
  },
];

const Sidebar = ({ Mobilemenu, showMobilemenu, showMobile }) => {
  let curl = useRouter();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);
  // const location = curl.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);

// ==================================   ------------------------------  ====================================

    
const { data: session } = useSession();

const handleLogout = async () => {
  // Perform any additional logout logic if needed
  deleteCookie('logged');
  console.log("remove cookie", deleteCookie);

  const data = await signOut({ redirect: false, callbackUrl: "/login" });

  // Check if signOut was successful
  if (!data?.error) {
    // Redirect to the login page
    router.push("/login");
  } else {
    // Handle sign out error
    console.error('Logout failed');
  }
};

  return (
    <>
      <div className="h-screen flex justify-between flex-col">
        <div className="py-5 relative z-50 h-full">
          <div className="flex items-center relative px-4 ">
            <Dropdown
              className="right-0 left-[unset]"
              itemsclass="z-[999] md:!w-[240px] p-2 [&>a:nth-child(3)]:!border-0 [&>a:nth-child(4)]:!border-t [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-0 !w-full sm:!w-[180px] left-0"
              button={
                <div
                  className={`flex items-center gap-[6px] transition-all duration-300 ease-in`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                    <Image src={Userid} alt="" />
                  </div>
                  <p className="text-left text-sm font-semibold text-black/80 dark:text-white/80">
                    Heena Vinayak
                  </p>
                </div>
              }
              dropdownitem={[
                { id: 1, title: "Manage account", link: "/", icon: User },
                {
                  id: 2,
                  title: "Logout",
                  link: "/login",
                  icon: LogOut,
                  onClick: handleLogout,
                },
                { id: 3, title: "Help center", link: "/", icon: Chats },
                { id: 4, title: "Changelog", link: "/", icon: NoteBook },
                { id: 5, title: "Blog", link: "/", icon: Blog },
              ]}
            >
              <div
                className={`w-full flex gap-[6px] pl-[3px] pb-[9px] pt-1 transition-all duration-300 ease-in items-center border-b border-black/5`}
              >
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                  <Image src={Userid} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-left text-sm font-semibold text-black/80 dark:text-white/80 cursor-default">
                    {session?.user?.name}
                  </p>
                  <Link
                    href={""}
                    className={`text-[9px] hover:text-white transition-all duration-300 ease-in block text-black/80 dark:text-white/80 pointer-events-none h-auto  opacity-100`}
                  >
                    {session?.user?.email}
                  </Link>
                </div>
              </div>
            </Dropdown>
            <span className="ml-3 lgm:hidden block">
              <button onClick={showMobilemenu} className="flex">
                <Image src={Closebtn} alt="" className="w-6 dark:invert" />
              </button>
            </span>
          </div>
          <div className="overflow-auto h-[calc(100vh-120px)] px-4 custom-scrollbar mt-2">
            <div className="sidebar-left">
              <div className="mt-2">
                <Accordion
                  className={`list-none flex-col`}
                  title={"Home"}
                  name={"Home"}
                >
                  <div className=" p-2.5 rounded-lg">
                    <div className="">
                      {Home.map((navi, index) => (
                        <div key={index}>
                          <Link href={navi.href} onClick={showMobile}>
                            <span
                              className={`nav-link flex items-center hover:opacity-70 w-full font-semibold transition-all text-sm py-[6px] pl-3 rounded-lg relative
                                 "dark:after:bg-secondary-purpleb after:rounded-[3px] after:left-0 after:translate-y-[-50%]"
                              
                                }`}
                            >
                              <Image
                                src={navi.icon}
                                alt=""
                                className="dark:invert"
                              />
                              <span className="ml-1 d-inline-block font-normal text-black dark:text-white">
                                {navi.title}
                              </span>
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </Accordion>
              </div>
              <div className="mt-3">
                <Link href="/categories">
                  <h4 className="text-black dark:text-white font-medium">
                    {" "}
                    Categories{" "}
                  </h4>
                </Link>
              </div>
            </div>
          </div>
          {/* <Link href="/" className="bottom-0 left-0 px-3 flex justify-center w-full" onClick={showMobile}>
            <Image src='{}' alt="" className="dark:invert mb-6" />
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
