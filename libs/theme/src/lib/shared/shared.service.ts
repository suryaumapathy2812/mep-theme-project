import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  layout: "auth" | "admin" = "auth";


}
