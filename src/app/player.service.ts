import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of as observableOf } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { Player } from "./models";

@Injectable({ providedIn: "root" })
export class PlayerService {
    private apiUrl: string = "api/players";

    constructor(private httpClient: HttpClient) {}

    getPlayers(): Observable<Player[]> {
        return this.httpClient.get<Player[]>(this.apiUrl).pipe(
            tap(players => console.log("result from API", players)),
            catchError(error => observableOf([]))
        );
    }
}