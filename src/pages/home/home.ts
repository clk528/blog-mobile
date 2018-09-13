import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ArticleService} from "../../clk/service/articleService";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage implements OnInit {
    pageInfo: {
        page: number,
        last_page: number
    };
    articleList: Array<{
        category_id: number,
        createUser: string,
        created: string,
        id: number,
        modified: string,
        modifyUser: string,
        status: number,
        subtitle: string,
        title: string,
        category: {
            id: number,
            name: string
        }
    }>;


    constructor(public navCtrl: NavController, private article: ArticleService) {
        this.articleList = [];
        this.article.getArticleList().subscribe((response: any) => {
            this.articleList = response.data;

            this.pageInfo = {
                page: response.page,
                last_page: response.last_page
            };

        });
    }

    doInfinite(infiniteScroll) {
        let page = this.pageInfo.page + 1;

        this.article.getArticleList(page).subscribe((response: any) => {

            response.data.forEach((item) => {
                this.articleList.push(item);
            });

            this.pageInfo = {
                page: response.page,
                last_page: response.last_page
            };

            infiniteScroll.complete();

            if (page >= response.last_page) {
                infiniteScroll.enable(false);
            }

        });
    }

    ngOnInit(): void {

    }
}
