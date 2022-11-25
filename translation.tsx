import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT } from "./typings";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

function translation({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT }: Props) {
  i18next.use(initReactI18next).init({
    resources: {},
    lng: "",
  });
}

export default translation;
