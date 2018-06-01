import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Reference } from './reference';
import { ReferenceService } from '../services/reference.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
  providers: [ReferenceService]
})
export class ReferencesComponent implements OnInit {
  static pageTitle = 'Referenties';
  references: Reference[];

  constructor(
    private referenceService: ReferenceService,
    private title: Title
  ) { }

  ngOnInit() {
    this.references = this.referenceService.getReferences();
    this.title.setTitle(ReferencesComponent.pageTitle);
  }
}
