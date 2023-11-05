import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <section className="flexStart footer">
    <div className="flex flex-col gap-12 w-full">
      <div className="flex items-start flex-col">
        <div className="relative flex items-center">
        <Link href="/" className="flex btnNav">
            <Image
              src="/logoSS.svg"
              loading="lazy"
              style={{ color: "transparent" }}
              width={50}
              height={45}
              className="transition-transform duration-200 ease-in-out hover:scale-[1.3]"
              alt="aa"
            />
          </Link>
          <Link
            href={"/home"}
            className="ms-1 pt-1 btnNav normal-case text-xl font-bold text-primary-purple"
          >
            Skillsync
          </Link>

        
        </div>

        <p className="text-start text-sm font-normal mt-5 max-w-xs">
          Skillsync is the best community for COSCI SWU to creatives share,
          grow, and get hired.
        </p>
      </div>
      <div className="flex flex-wrap gap-12">
        <FooterColumn
          title={footerLinks[0].title}
          links={footerLinks[0].links}
        />

        <div className="flex-1 flex flex-col gap-4">
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <FooterColumn
            title={footerLinks[2].title}
            links={footerLinks[2].links}
          />
        </div>

        <FooterColumn
          title={footerLinks[3].title}
          links={footerLinks[3].links}
        />

        <div className="flex-1 flex flex-col gap-4">
          <FooterColumn
            title={footerLinks[4].title}
            links={footerLinks[4].links}
          />
          <FooterColumn
            title={footerLinks[5].title}
            links={footerLinks[5].links}
          />
        </div>

        <FooterColumn
          title={footerLinks[6].title}
          links={footerLinks[6].links}
        />
      </div>
    </div>

    <div className="flexBetween footer_copyright">
      <p>@ 2023 Skillsync. All rights reserved</p>
      <p className="text-gray">
        <span className="text-black font-semibold">99</span> projects submitted
      </p>
    </div>
  </section>
);

export default Footer;
