import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import * as JwtDecode from 'jwt-decode';

@Injectable()
export class AuthMidleware implements CanActivate {
    constructor(private router:Router){
        
    }
    canActivate():boolean {
        const token = localStorage.getItem('token');
        let canAccess = false;
        if(token == null){
            this.router.navigate(['/login']).then();
        } else {
            try{
                const jwt = JwtDecode(token);
                canAccess = (jwt != null && jwt.exp != null && jwt.exp > Date.now()/1000);
                console.log(canAccess);
            } catch(e){
                this.router.navigate(['/login']).then();
            }
        }
        return canAccess;
    }
 } 

