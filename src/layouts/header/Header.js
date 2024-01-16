import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import Squre from "@/assets/images/icon/squre.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import Themechange from "@/assets/images/icon/Sun.svg";
import Menuicon from "@/assets/images/icon/menuicon.svg";
import dashboard from "@/assets/images/icon/dashboard.svg";
import orders from "@/assets/images/icon/orders.svg";
import products from "@/assets/images/icon/products.svg";
import offers from "@/assets/images/icon/offers.svg";
import customers from "@/assets/images/icon/customers.svg";
import StoreDetails from "@/assets/images/icon/store-details.svg";
import Permissions from "@/assets/images/icon/permissions.svg";
import Checkout from "@/assets/images/icon/checkout.svg";
import rupee from "@/assets/images/icon/rupee.svg";
import shipping from "@/assets/images/icon/shipping.svg";
import Percentage from "@/assets/images/icon/percentage.svg";
import Brandassets from "@/assets/images/icon/brand-assets.svg";
import Email from "@/assets/images/icon/Email.svg";
import SEO from "@/assets/images/icon/SEO.svg";
import Policies from "@/assets/images/icon/Policies.svg";
import Bechopro from "@/assets/images/icon/Bechopro.svg";
// import BreadCrumb from "@/components/ui/BreadCrumb";

const Header = ({ showMobmenu }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    {
      title: "Dashboard",
      href: "/",
      icon: dashboard,
    },
    {
      title: "Orders",
      href: "/orders",
      icon: orders,
    },
    {
      title: "Orders Details",
      href: "/orders/[orders]",
      icon: orders,
    },
    {
      title: "Products",
      href: "/products",
      icon: products,
    },
    {
      title: "Products / Detail",
      href: "/products/[products]",
      icon: products,
    },
    {
      title: "Offers",
      href: "/offers",
      icon: offers,
    },
    {
      title: "Offers / Detail",
      href: "/offers/[offers]",
      icon: offers,
    },
    {
      title: "Customers",
      href: "/customers",
      icon: customers,
    },
    {
      title: "Customers",
      href: "/customers/[customers]",
      icon: customers,
    },
    {
      title: "Store Details",
      href: "/store-details",
      icon: StoreDetails,
    },
    {
      title: "Permissions",
      href: "/permissions",
      icon: Permissions,
    },
    {
      title: "Checkout",
      href: "/checkout",
      icon: Checkout,
    },
    {
      title: "Payment Gateways",
      href: "/payment-gateways",
      icon: rupee,
    },
    {
      title: "Shipping & Delivery",
      href: "/shipping-delivery",
      icon: shipping,
    },
    {
      title: "Taxes",
      href: "/taxes",
      icon: Percentage,
    },
    {
      title: "Brand Assets",
      href: "/brand-assets",
      icon: Brandassets,
    },
    {
      title: "Email Settings",
      href: "/email-settings",
      icon: Email,
    },
    {
      title: "SEO Settings",
      href: "/seo-settings",
      icon: SEO,
    },
    {
      title: "Policies",
      href: "/policies",
      icon: Policies,
    },
    {
      title: "Bechopro",
      href: "/becho-pro",
      icon: Bechopro,
    },
  ];

  const Blogs = [
    {
      title: "Posts",
      href: "/posts",
      icon: StoreDetails,
    },
    {
      title: "Drafts",
      href: "/draft",
      icon: dashboard,
  
    },
    {
      title: "Tags",
      href: "/tags",
      icon: products,
  
    },
    {
      title: "Blog Settings",
      href: "/blog settings",
      icon: Permissions,
    },
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <span role="button" onClick={() => setTheme("light")}>
          <Image src={Themechange} alt="" className="w-5 dark:invert" />
        </span>
      );
    } else {
      return (
        <span role="button" onClick={() => setTheme("dark")}>
          <Image src={Themechange} alt="" className="w-5" />
        </span>
      );
    }
  };
  const [isopen, setisopen] = React.useState(false);  
 
  const Handletoggle = () => {
    setisopen(!isopen);     
  };  

  let curl = useRouter();
  const location = curl.pathname;
  return (
    <>
      <div className="border-b border-black/10 dark:border-white/10 relative z-10">
        <div className="flex items-center justify-between md:px-7 px-4 md:py-6 py-4 md:gap-2 gap-4 header-top">
          <button color="primary" className="md:hidden block w-7 min-w-[28px]" onClick={showMobmenu}>
            <Image src={Menuicon} alt="" className="dark:invert" />
          </button>
          <div isopen={"false"} className={`dashbord-img ${isopen ? "md:block" : "md:block hidden"}`}>
          <div className="flex md:static absolute md:shadow-none shadow-layer-shadow dark:shadow-black dark:shadow-sm dark:md:shadow-none bg-white dark:bg-blacklight w-full left-0 top-[61px] items-center md:px-0 px-3 md:py-0 py-5 gap-3">
              <button color="primary" className="lgm:hidden md:block hidden" onClick={showMobmenu}>
                <Image src={Menuicon} alt="" className="w-7 dark:invert" />
              </button>
              <button color="primary" className="lgm:block hidden" onClick={showMobmenu}>
                <Image src={Squre} alt="" className="dark:invert" />
              </button>
                <div className={`flex items-center`} >
                  {navigation.map((navi, index) => {
                    if (location === navi.href) {
                      return (
                        <div  key={index}>
                          <span></span>
                          <Image src={navi.icon} alt="" className={`dark:invert mr-5`} />
                        </div>
                      )
                    }}
                  )}
                   {Blogs.map((navi, index) => { 
                    if (location === navi.href) {
                      return ( 
                        <div key={index}>
                          <span></span>
                          <Image src={navi.icon} alt="" className={`dark:invert mr-5`}/>
                        </div>
                      )
                    }}
                  )}
                  <div className="text-black/40 dark:text-white/40">
                    <Link href="/" className="text-sm hover:text-black/80 dark:hover:text-white/80">
                      AstroDev
                    </Link>
                    {/* <BreadCrumb /> */}
                  </div>
                </div>
            </div>
          </div>
          <div className="flex sm:w-1/2 w-full xl:gap-8 sm:gap-4 gap-3 items-center justify-end">
            <div className="relative w-fit">
              <input
                placeholder="Search"
                className="rounded-lg max-w-[261px] w-full lg:w-[261px] pl-[26px] placeholder:text-sm text-xs bg-black/5 dark:bg-white/5 p-[6px] pr-3 focus-visible:outline-none"
              />
              <Image src={Searchicon} alt="" className="absolute top-[7px] left-[7px] dark:invert" />
            </div>
            <button>{renderThemeChanger()}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
