interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: String;
  role: string;
  typewriter_1: string;
  typewriter_2: string;
  typewriter_3: string;
  typewriter_4: string;
  aboutButton: string;
  skillsButton: string;
  projectsButton: string;
  contactButton: string;
  downloadButton: string;
  introImage: Image;
  aboutPic: Image;
  aboutTitle: string;
  aboutSubtitle: string;
  backgroundInformation: string;
  skillsTitle: string;
  skillsSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  word_1: string;
  word_2: string;
  contactTitle: string;
  contactSubtitle: string;
  phoneNumber: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  placeholderName: string;
  placeholderSurname: string;
  placeholderSubject: string;
  placeholderEmail: string;
  placeholderMessage: string;
  submitButton: string;
  koalenderUrl: string;
  koalenderText: string;
  myCurriculumURL: string;
}

export interface PageInfoNL extends SanityBody {
  _type: "pageInfoNL";
  role: string;
  typewriter_1: string;
  typewriter_2: string;
  typewriter_3: string;
  typewriter_4: string;
  aboutButton: string;
  skillsButton: string;
  projectsButton: string;
  contactButton: string;
  downloadButton: string;
  aboutTitle: string;
  aboutSubtitle: string;
  backgroundInformation: string;
  skillsTitle: string;
  skillsSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  word_1: string;
  word_2: string;
  projectLinkTitel: string;
  contactTitle: string;
  contactSubtitle: string;
  address: string;
  placeholderName: string;
  placeholderSurname: string;
  placeholderSubject: string;
  placeholderMessage: string;
  submitButton: string;
  koalenderText: string;
  myCurriculumURL: string;
}

export interface PageInfoFR extends SanityBody {
  _type: "pageInfoFR";
  role: string;
  typewriter_1: string;
  typewriter_2: string;
  typewriter_3: string;
  typewriter_4: string;
  aboutButton: string;
  skillsButton: string;
  projectsButton: string;
  contactButton: string;
  downloadButton: string;
  aboutTitle: string;
  aboutSubtitle: string;
  backgroundInformation: string;
  skillsTitle: string;
  skillsSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  word_1: string;
  word_2: string;
  projectLinkTitel: string;
  contactTitle: string;
  contactSubtitle: string;
  address: string;
  placeholderName: string;
  placeholderSurname: string;
  placeholderSubject: string;
  placeholderMessage: string;
  submitButton: string;
  koalenderText: string;
  myCurriculumURL: string;
}

export interface PageInfoPT extends SanityBody {
  _type: "pageInfoPT";
  role: string;
  typewriter_1: string;
  typewriter_2: string;
  typewriter_3: string;
  typewriter_4: string;
  aboutButton: string;
  skillsButton: string;
  projectsButton: string;
  contactButton: string;
  downloadButton: string;
  aboutTitle: string;
  aboutSubtitle: string;
  backgroundInformation: string;
  skillsTitle: string;
  skillsSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  word_1: string;
  word_2: string;
  projectLinkTitel: string;
  contactTitle: string;
  contactSubtitle: string;
  address: string;
  placeholderName: string;
  placeholderSurname: string;
  placeholderSubject: string;
  placeholderMessage: string;
  submitButton: string;
  koalenderText: string;
  myCurriculumURL: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  skillName: string;
  image: Image;
}

export interface Project extends SanityBody {
  _type: "project";
  projectTitle: string;
  projectTitleNL: string;
  projectTitleFR: string;
  projectTitlePT: string;
  projectImage: Image;
  summary: string;
  summaryNL: string;
  summaryFR: string;
  summaryPT: string;
  technologies: Technologie[];
  buildLink: string;
}

export interface Social extends SanityBody {
  _type: "social";
  socialMedia: string;
  socialMediaUrl: string;
}
