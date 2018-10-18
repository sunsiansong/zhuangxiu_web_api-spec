import { Observable } from 'rxjs';
import { HomeState, CasesCompData, PostsPageData, ContactInfo } from './aggregate/api-models';
import { Config } from './model/config.model';
import { UserLike } from './model/like.model';
import { Case } from './model/case.model';




export interface PageDataService {
  homeData(): Observable<HomeState>;

  casesListData(): Observable<CasesCompData>;

  postsPageData(): Observable<PostsPageData>;

  aboutPageData(): Observable<any>;

  configs(): Observable<{[key: string]: Config}>;

  userLikes(): Observable<UserLike[]>;

  submitContactInfo(info: ContactInfo): Observable<any>;

  getCaseDetail(id: number): Observable<Case>;
}
