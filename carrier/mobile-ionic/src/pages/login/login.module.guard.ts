import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Store } from '../../services/store.service';

@Injectable()
export class LoginModuleGuard implements CanLoad {
	constructor(
		private readonly store: Store,
		private readonly router: Router
	) {}

	async canLoad(route: Route) {
		const isLogged = await this.store.isLogged();
		if (isLogged) {
			this.router.navigateByUrl('main');
			return false;
		}
		return true;
	}
}
