"use client";
import React, { useState } from "react";
import DarkLogo from "@/assets/logo/logo_for_light.png";
import Link from "next/link";
import Image from "next/image";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

const TwitterXIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M3.18 23.76c.3.17.64.23.99.18l12.47-7.19-2.56-2.56-10.9 9.57zm-1.37-20.3C1.6 3.8 1.5 4.2 1.5 4.67v14.67c0 .47.1.87.31 1.2l.07.06 8.22-8.22v-.19L1.81 3.46zm17.54 9.18l-2.6-1.5-2.87 2.87 2.87 2.87 2.6-1.5c.74-.43.74-1.31 0-1.74zM4.17.24L16.64 7.43l-2.56 2.56L3.18.42C3.53-.13 3.87-.1 4.17.24z" />
  </svg>
);

const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

interface FooterLinkProps {
  href?: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href = "#", children }) => (
  <a
    href={href}
    className="block text-sm text-gray-500 py-0.5 hover:text-(--primary-color) -text-red-500 transition-colors duration-200"
  >
    {children}
  </a>
);

interface FooterColumnProps {
  title: string;
  links: string[];
}
const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="min-w-30">
    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
      {title}
    </h4>
    <div className="space-y-1">
      {links.map((link) => (
        <FooterLink key={link}>{link}</FooterLink>
      ))}
    </div>
  </div>
);

interface CollapsibleSectionProps {
  title: string;
  data: string[];
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  data,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200 mx-auto px-6">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full border-b border-gray-200 flex justify-between items-center pt-4 ${open ? "pb-2" : "pb-0"} text-sm font-semibold text-gray-800 hover:text-(--primary-color) transition-colors duration-200 bg-transparent border-none cursor-pointer`}
      >
        {title}
        <ChevronDownIcon
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {data && data?.length > 0 && (
        <div
          className={`text-gray-500 text-sm pb-5 space-y-1 grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden ">
            {data.map((i) => (
              <FooterLink key={i}>{i}</FooterLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Footer: React.FC = () => {
  const aboutLinks = [
    "Who We Are",
    "Blog",
    "Report Fraud",
    // "Press Kit",
    "Contact Us",
  ];
  const zomaverseLinks = [
    "District",
    "Feeding India",
    "Hyperpure",
    "Weather Union",
  ];

  const restaurantLinks = ["Partner With Us", "Apps For You"];
  const learnLinks = ["Privacy", "Security", "Terms"];

  const socialIcons = [
    { icon: <LinkedInIcon />, label: "LinkedIn" },
    { icon: <InstagramIcon />, label: "Instagram" },
    { icon: <TwitterXIcon />, label: "X" },
    { icon: <YouTubeIcon />, label: "YouTube" },
    { icon: <FacebookIcon />, label: "Facebook" },
  ];

  const citiesWeDeliver = [
    "Delhi",
    "Bangalore",
    "Alwar",
    "Udaipur",
    "Vrindavan",
    "Barsana",
  ];

  const topRestraunts = [
    "cafe Delhi Heights",
    "Shahi Mahal Restobar",
    "The Dom Lounge Dine",
  ];

  return (
    <footer className="bg-white border-t border-gray-200 font-sans">
      <div className="container">
        <div className=" mx-auto pt-10 pb-8">
          {/* Top Row: Logo + Country/Language */}
          <div className="flex flex-wrap justify-between items-start gap-6 mb-10">
            <Link href="/">
              <span className="sr-only">company logo</span>
              <Image src={DarkLogo} alt="logo" className="w-28" />
            </Link>
            <div className="flex gap-3">
              {["🇮🇳  India", "🌐  English"].map((label) => (
                <button
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 bg-white hover:border-gray-400 transition-colors duration-200 cursor-pointer"
                >
                  {label}
                  <ChevronDownIcon />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="flex flex-wrap gap-x-12 gap-y-8 justify-between mb-10">
            <FooterColumn title="About Us" links={aboutLinks} />
            <FooterColumn title="Zomaverse" links={zomaverseLinks} />
            <FooterColumn title="For Restaurants" links={restaurantLinks} />
            <FooterColumn title="Learn More" links={learnLinks} />

            {/* Social + App Badges */}
            <div className="min-w-42.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
                Social Links
              </h4>

              {/* Social Icons */}
              <div className="flex gap-2 flex-wrap mb-6">
                {socialIcons.map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-(--primary-color) hover:text-white transition-colors duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>

              {/* App Badges */}
              <div className="flex flex-col gap-2.5">
                <a
                  href="#"
                  className="flex items-center gap-2.5 bg-gray-800 text-white rounded-lg px-4 py-2 w-40 hover:opacity-80 transition-opacity duration-200 no-underline"
                >
                  <AppleIcon />
                  <div>
                    <div className="text-xs opacity-80 leading-none">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold leading-snug">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2.5 bg-gray-800 text-white rounded-lg px-4 py-2 w-40 hover:opacity-80 transition-opacity duration-200 no-underline"
                >
                  <PlayStoreIcon />
                  <div>
                    <div className="text-xs opacity-80 leading-none">
                      GET IT ON
                    </div>
                    <div className="text-sm font-semibold leading-snug">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Sections */}
        <CollapsibleSection
          title="Top restaurant chains"
          data={topRestraunts}
        />
        <CollapsibleSection
          title="Cities we deliver to"
          data={citiesWeDeliver}
        />
      </div>
      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px6 py-5 ">
          <p className="text-xs text-gray-400 leading-relaxed">
            By continuing past this page, you agree to our{" "}
            {[
              "Terms of Service",
              "Cookie Policy",
              "Privacy Policy",
              "Content Policies",
            ].map((item, i, arr) => (
              <React.Fragment key={item}>
                <a
                  href="#"
                  className="text-gray-400 underline hover:text-red-500 transition-colors duration-200"
                >
                  {item}
                </a>
                {i < arr.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
            . All trademarks are properties of their respective owners.
            2008–2026 © RN-eats Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
