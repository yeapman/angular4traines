import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'app-mainroute',
  templateUrl: './mainroute.component.html',
  styleUrls: ['./mainroute.component.css']
})
export class MainrouteComponent implements OnInit {

  constructor(route: ActivatedRoute, private router: Router, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }


  scrollTo(anchor: string) {
    // TODO - HACK: remove click once https://github.com/angular/angular/issues/6595 is fixed
    this.document.querySelector('#'+ anchor).scrollIntoView();
  }
}
