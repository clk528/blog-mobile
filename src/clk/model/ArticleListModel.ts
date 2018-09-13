

export class ArticleListModel {

    id: number;

    title: string;

    category_id: number;


    subtitle: string;


    status: number;

    createUser: string;

    modifyUser: string;

    created: string;

    modified: string;

    category: {
        id: number,
        name: string
    }
}
