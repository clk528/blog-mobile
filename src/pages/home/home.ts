import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
// import Color from "./../../plugin/Colors";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    // items: Array<{ items: Array<{ color: string }>, class: string }>;

    artcles: Array<{ title: string, sub_title: string, id: number }>;

    constructor(public navCtrl: NavController) {
        this.artcles = [];


        for (let i = 1; i <= 10; i++) {
            this.artcles.push({
                title: `标题--${i}`,
                sub_title: `子标题`,
                id: i
            });
        }


        /*this.items = [];
        Color.forEach((item) => {
            let data = {
                class: 'div',
                items: []
            };
            item.forEach((color) => {
                data.items.push({
                    color: color
                });
            });

            this.items.push(data)
        });

        setTimeout(() => {
            this.test();
        }, 500);*/
    }

    test() {
        console.log(this.artcles);
    }
}
