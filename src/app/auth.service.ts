import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router"; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  userData$ = new BehaviorSubject<any>(null);
  token: string | null = null;  

  constructor(private router: Router) { 
    this.checkLoginStatus();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  login(userData: any, token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token); // Save token in localStorage
      this.isLoggedIn$.next(true);
      this.userData$.next(userData);
      this.token = token;  // Store token in memory
    }
  }

  checkLoginStatus(): void {
    if (this.isBrowser()) {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
      if (storedUser && storedToken) {
        const userData = JSON.parse(storedUser);
        this.isLoggedIn$.next(true);
        this.userData$.next(userData);
        this.token = storedToken; // Retrieve token from localStorage
      }
    }
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('user');
      localStorage.removeItem('token'); // Remove token from localStorage
      this.isLoggedIn$.next(false);
      this.userData$.next(null);
      this.token = null; // Clear token in memory

      
      this.router.navigate(['/login']);
    }
  }
}
