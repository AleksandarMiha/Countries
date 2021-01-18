import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  @Output() sendEvent = new EventEmitter;
  searchTerm: any = ''
  constructor() { }

  ngOnInit(): void {
  }

  onChange(e){
    this.sendEvent.emit(e);
  } 

}
