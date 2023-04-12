import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seal-page',
  templateUrl: './seal-page.component.html',
  styleUrls: ['./seal-page.component.scss']
})
export class SealPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openWhatsApp(product: string) {
    const message = `Hello! I'm interested in purchasing ${product}. Can you please confirm the availability and let me know how I can proceed with the purchase? Thank you!`;

    window.open(`https://wa.me/+5581999489946?text=${encodeURIComponent(message)}`, "_blank");
  }
}
