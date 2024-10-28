import { Component } from '@angular/core';
import { ThemeService } from './components/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';

  constructor(private themeService:ThemeService) {}

  changeTheme(theme:string){
    console.log('Theme changed to:', theme);
    this.themeService.switchTheme(theme);

  }
}

