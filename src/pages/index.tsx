import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import WelcomeAnimation from "@/components/welcome-animation";
import PageDescription from "@/components/page-description";
import { H2 } from "@/components/typography";
import PostItem from "@/components/post-item";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "@/components/ui/button";
import { GITHUB_URL, INSTAGRAM_URL, PORTFOLIO_URL } from "@/constants";
import { ExternalLink, Github, Instagram } from "lucide-react";
import ContactMe from "@/components/contact-me";

const IndexPage = ({}: PageProps) => {
  return (
    <>
      <WelcomeAnimation />
      <PageDescription>
        이곳은 웹개발자
        <span className="font-medium">&nbsp;서민석</span>의 개발블로그입니다. 😊
      </PageDescription>
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col gap-y-3">
          <span className="text-4xl font-bold">서민석</span>
          <span className="font-light">Seoul, Korea / Web Developer</span>
        </div>
        <div className="self-center sm:self-auto relative w-28 h-28 mt-8 sm:mt-0 rounded-full overflow-hidden">
          <StaticImage
            src="../assets/images/me.png"
            className="object-cover"
            alt="Minseok Seo"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-1">
          <Button
            variant="ghost"
            className="w-10 h-10 p-0 flex justify-center items-center"
            asChild
          >
            <Link to={INSTAGRAM_URL} target="_blank">
              <Instagram className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-10 h-10 p-0 flex justify-center items-center"
            asChild
          >
            <Link to={GITHUB_URL} target="_blank">
              <Github className="w-5 h-5" />
            </Link>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" asChild>
            <Link target="_blank" to={PORTFOLIO_URL} className="flex gap-1">
              <span>포트폴리오</span>
              <ExternalLink className="w-[1rem] h-[1rem]" />
            </Link>
          </Button>
          <ContactMe />
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-14">
        <div>
          <H2 className="flex justify-between">
            <span>Recent Posts 💁‍♂️</span>
            <div className="flex items-end text-sm font-light">
              <Link to="/posts">더보기</Link>
            </div>
          </H2>
          <div className="mt-8 flex flex-col gap-y-6">
            <PostItem />
            <PostItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
