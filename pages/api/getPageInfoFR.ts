import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfoFR } from "../../typings";

const query = groq`
  *[_type == "pageInfoFR"][0] {
  ...,
  "myCurriculumURL": myCurriculum.asset->url
}
`;

type Data = {
  pageInfoFR: PageInfoFR;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfoFR: PageInfoFR = await sanityClient.fetch(query);
  res.status(200).json({ pageInfoFR });
}
