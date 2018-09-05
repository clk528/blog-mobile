import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import Color from "./../../plugin/Colors";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    items: Array<{ items: Array<{ color: string }>, class: string }>;

    constructor(public navCtrl: NavController) {
        this.items = [];
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

        setTimeout(()=>{
            this.test();
        },500);
    }

    test(){
        console.log(this.items);
    }
}
