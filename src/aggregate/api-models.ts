import { Case } from "../model/case.model";

import { Post } from "../model/post.model";

import { Config } from "../model/config.model";
import { PageData } from "../model/page.model";

export interface HomeState {
  now: Date;
  cases: Case[];
  newsPosts: Post[];
  articlePosts: Post[];
  configs: { [key: string]: Config };
}

export interface CasesCompData {
  page?: PageData<Case>;
  // tiles?: Case[][];
  now?: Date;
}

export interface ContactInfo {
  intentionType: string;
  channelType: string;
  channelVal: string;
  description: string;
  contactTime: string;
}

export interface PostsPageData {
  now: Date;
  channels: ChannelData[];
}

export interface ChannelData {
  name: string;
  page: PageData<Post>;
}
