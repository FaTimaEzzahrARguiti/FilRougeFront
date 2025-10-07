import { Component, OnInit } from '@angular/core';
import { CoworkingSpace } from '../../models/coworking-space.model';
import { CoworkingSpaceService } from '../../services/coworking-space.service';

@Component({
  selector: 'app-coworkcard',
  templateUrl: './coworkcard.component.html',
  styleUrls: ['./coworkcard.component.css']
})
export class CoworkcardComponent implements OnInit {
  spaces: CoworkingSpace[] = [];

  constructor(private coworkingSpaceService: CoworkingSpaceService) { }

  ngOnInit(): void {
    this.coworkingSpaceService.getAllSpaces().subscribe(data => {
      this.spaces = data;
    });
  }
}
