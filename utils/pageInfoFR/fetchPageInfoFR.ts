import { PageInfoFR } from "../../typings";

export const fetchPageInfoFR = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfoFR`
  );
  const data = await res.json();
  const pageInfoFR: PageInfoFR = data.pageInfoFR;

  // console.log("fetching", pageInfoFR);

  return pageInfoFR;
};
