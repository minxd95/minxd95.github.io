import { Badge } from "@/components/ui/badge";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function PostItem() {
  return (
    <div className="rounded-sm border overflow-hidden w-full sm:h-48 flex flex-col sm:flex-row cursor-pointer">
      <StaticImage
        src={"../assets/images/no-image.jpg"}
        alt=""
        className="w-full sm:w-48 h-56 sm:h-48 dark:hidden"
      />
      <StaticImage
        src={"../assets/images/no-image-dark.jpg"}
        alt=""
        className="w-full sm:w-48 h-56 sm:h-48 hidden dark:inline"
      />
      <div className="flex-1 flex flex-col justify-between p-4">
        <div className="flex flex-col">
          <span className="font-medium">
            NextJS에서 GatsbyJS로 블로그 리뉴얼하기
          </span>
          <span className="text-sm mt-4 text-slate-600 dark:text-slate-300 line-clamp-3 sm:line-clamp-4">
            오늘은 NextJS에서 GatsbyJS로 마이그레이션한 후기에 대해서
            작성해보았습니다. 계기는 이며 서울특별시 강동구
          </span>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary">리뉴얼</Badge>
            <Badge variant="secondary">Gatsby</Badge>
            <Badge variant="secondary">Next</Badge>
          </div>
          <span className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            2024. 02. 12.
          </span>
        </div>
      </div>
    </div>
  );
}
