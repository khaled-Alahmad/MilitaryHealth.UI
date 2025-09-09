import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserRoles } from '../../../../core/models/enums/user-roles.enum';

@Component({
  selector: 'app-unauthorized',
  imports: [],
  templateUrl: './unauthorized.html',
  styleUrl: './unauthorized.scss'
})
export class Unauthorized {
  constructor(private router: Router, private auth: AuthService) {}

  goBack() {
    history.back();
  }

  goHome() {
    const role = this.auth.getUserRole();
    switch (role) {
      case UserRoles.Admin: this.router.navigate(['/admin']); break;
      case UserRoles.Receptionist: this.router.navigate(['/reception']); break;
      case UserRoles.Doctor: this.router.navigate(['/doctor']); break;
      case UserRoles.Supervisor: this.router.navigate(['/supervisor']); break;
      case UserRoles.Diwan: this.router.navigate(['/archive']); break;
      default: this.router.navigate(['/']);
    }
  }
}
