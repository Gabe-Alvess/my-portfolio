import { PageInfoPT } from "../../typings";

export const fetchPageInfoPT = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfoPT`
  );
  const data = await res.json();
  const pageInfoPT: PageInfoPT = data.pageInfoPT;

  // console.log("fetching", pageInfoPT);

  return pageInfoPT;
};
