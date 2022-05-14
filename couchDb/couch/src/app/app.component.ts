import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { FormupdateService } from './formupdate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormupdateService]
})
export class AppComponent {
  title = 'couch';
}
