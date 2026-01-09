export interface PersonalInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface Entry {
  title: string;
  organization?: string;
  organizationType?: string;
  location?: string;
  dateRange: string;
  description?: string;
  bullets?: string[];
  supervisor?: string;
  link?: string;
  note?: string;
}

export interface EducationEntry extends Entry {
  degree?: string;
  field?: string;
  thesis?: string;
}

export interface ResearchEntry extends Entry {
  department?: string;
  researchFocus?: string;
}

export interface PublicationEntry {
  type: 'project' | 'poster' | 'oral';
  date: string;
  authors: string;
  title: string;
  venue?: string;
  note?: string;
  link?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface TrainingEntry {
  name: string;
  date: string;
  description?: string;
}

export interface FundingEntry {
  source: string;
  link?: string;
  awards: {
    id: string;
    dateRange: string;
    note?: string;
  }[];
}

export interface SimpleListItem {
  label: string;
  detail?: string;
}

export type SectionContent =
  | string
  | Entry[]
  | EducationEntry[]
  | ResearchEntry[]
  | PublicationEntry[]
  | SkillGroup[]
  | TrainingEntry[]
  | FundingEntry[]
  | SimpleListItem[];

export interface CVSection {
  type: string;
  title: string;
  content: SectionContent;
}

export interface CV {
  id: 'tech' | 'biology' | 'general';
  label: string;
  sections: CVSection[];
}
