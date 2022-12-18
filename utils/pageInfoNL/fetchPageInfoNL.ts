import { PageInfoNL } from "../../typings";

export const fetchPageInfoNL = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfoNL`
  );
  const data = await res.json();
  const pageInfoNL: PageInfoNL = data.pageInfoNL;

  // console.log("fetching", pageInfoNL);

  return pageInfoNL;
};
