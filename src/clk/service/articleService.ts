import {Injectable} from "@angular/core";
import {HttpService} from "../../core/services/http.service";
import {Observable} from "rxjs";
import {ConfigService} from "../../core/services/config.service";

@Injectable()
export class ArticleService {
    constructor(private http: HttpService, private config: ConfigService) {
    }

    public getArticleList(page: number = 1): Observable<any> {

        return this.http.post(this.config.getArticleList, {
            page: page
        });
    }
}
