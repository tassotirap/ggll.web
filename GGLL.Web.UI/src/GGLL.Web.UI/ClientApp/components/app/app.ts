import { Aurelia, PLATFORM } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

export class App {
    public router: Router;

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'GGLL - Web';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('../welcome/welcome'), nav: true, title: 'Welcome' },
            { route: 'ggll', name: 'ggll', moduleId: PLATFORM.moduleName('../ggll/ggll'), nav: true, title: 'Editor' }
        ]);

        this.router = router;
    }
}
