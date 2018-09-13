import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap, catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {Events} from "ionic-angular";

@Injectable()

export class HttpService {
    constructor(public http: HttpClient, private event: Events) {
    }

    public get<T>(url: string): Observable<T> {
        let headers = new HttpHeaders();
        return this.http.get<T>(url, {headers: headers}).pipe(
            tap(model => console.log(model)),
            catchError(this.handleError<T>(url))
        );
    }

    public post<T>(url: string, body: any = null): Observable<T> {
        let headers = new HttpHeaders();
        return this.http.post<T>(url, body, {
            headers: headers
        }).pipe(
            tap(model => console.log(model)),
            catchError(this.handleError<T>(url))
        );
    }

    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            if (error.status) {
                switch (error.status) {
                    case 401:
                        this.event.publish("user::unautherized");
                        break;
                    default:
                        break;
                }
            }
            // TODO: send the error to remote logging infrastructure
            console.error(error, operation, result); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
