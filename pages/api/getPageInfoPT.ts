import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfoPT } from "../../typings";

const query = groq`
  *[_type == "pageInfoPT"][0] {
  ...,
  "myCurriculumURL": myCurriculum.asset->url
}
`;

type Data = {
  pageInfoPT: PageInfoPT;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfoPT: PageInfoPT = await sanityClient.fetch(query);
  res.status(200).json({ pageInfoPT });
}
