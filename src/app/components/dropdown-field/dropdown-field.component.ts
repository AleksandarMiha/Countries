import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit {
  @Input() regions: any[] = [];
  @Output() sendEventRegion = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  selectedCountry(e){
    let selectedRegion = e.target.value;
    this.sendEventRegion.emit(selectedRegion);
  }
 

}
