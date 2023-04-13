import { Component, OnInit } from '@angular/core';
import map from './utils/maps'

@Component({
  selector: 'app-seal-page',
  templateUrl: './seal-page.component.html',
  styleUrls: [
    './styles/seal-page.component.scss',
    './styles/desktop.component.scss'
  ]
})
export class SealPageComponent implements OnInit {
  public isSendMessage: boolean = false;
  public maps = map;

  constructor() { }

  ngOnInit(): void {}

  openWhatsApp() {
    this.isSendMessage = !this.isSendMessage
    window.open(`https://wa.me/+5581999489946?text=${encodeURIComponent(this.maps.whatsappToSendMessage)}`, "_blank");
  }
}
