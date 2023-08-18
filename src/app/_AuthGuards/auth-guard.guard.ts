import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../Services/account.service';

import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const authGuardGuard: CanActivateFn = (route, state  ) => {
  const account = inject(AccountService); 
  const toaster = inject(ToastrService);
  const router = inject(Router);

return  account.CurrentUser$.pipe(
   map((isLoggedIn)=>{
      if(isLoggedIn) return true;
      toaster.error("You are not authorized");
      return router.parseUrl('');
   })
  )

};
