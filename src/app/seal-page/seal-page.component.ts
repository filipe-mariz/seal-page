import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seal-page',
  templateUrl: './seal-page.component.html',
  styleUrls: ['./seal-page.component.scss']
})
export class SealPageComponent implements OnInit {
  public message = "Hello! I'm interested in purchasing Dentitox Pro. Can you please confirm the availability and let me know how I can proceed with the purchase? Thank you!"
  public isSendMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  openWhatsApp() {
    window.open(`https://wa.me/+5581999489946?text=${encodeURIComponent(this.message)}`, "_blank");

    this.isSendMessage = !this.isSendMessage
  }
}
