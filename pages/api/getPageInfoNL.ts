import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfoNL } from "../../typings";

const query = groq`
  *[_type == "pageInfoNL"][0] {
  ...,
  "myCurriculumURL": myCurriculum.asset->url
}
`;

type Data = {
  pageInfoNL: PageInfoNL;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfoNL: PageInfoNL = await sanityClient.fetch(query);
  res.status(200).json({ pageInfoNL });
}
