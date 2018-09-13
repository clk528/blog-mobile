import {Injectable} from "@angular/core";

@Injectable()

export class ConfigService {
    DefultConfig = {
        apiHost: "https://clk528.com/api/",
        api: {
            articleList: 'article',
            getArticle: 'article/getArticle'
        }
    };

    public get apiHost() {
        return this.DefultConfig.apiHost;
    }

    public get getArticleList() {
        return this.DefultConfig.apiHost + this.DefultConfig.api.articleList;
    }
}
