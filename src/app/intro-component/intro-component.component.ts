import { Component } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-intro-component',
  standalone: true,
  imports: [NgImageSliderModule],
  templateUrl: './intro-component.component.html',
  styleUrl: './intro-component.component.css',
})
export class IntroComponentComponent {
  imageObject = [
    {
      image:
        'https://s3-alpha-sig.figma.com/img/5c7d/c011/5351878d7a9556e9bb5e1b3327649990?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHL5NN1q9E7gxNeM28MXaP4CdQGW7pqq4ho6nycZnugFq55c5MC~hytSASRuTL2c4HzELQUWmpp~G8jzKub2hqQdF4O7O0wE3DAoU8qDVHF8wzJo1sSLFO6PbSgprADLnU9XUDFgpHUAKovwKgZJHtncZnkd~Rm8bXJwawT9fae5R2WCLzxjjij1gcoHfl8ZVf3A75T1ZnT4Ejt1tKnhF6zaFKaqnuOIXW6Lp7cZHqnwBSoobJ~xSKPkqp-Mtdy2zXmdPRi~Iea9XjDjT1hUL4syFTBGx-6yiFxAkmRA-4kwXkh4N8~KHfNaWl~X0Ltsp6DKVCUJiyDn6FwDyq5ImA__',
      thumbImage:
        'https://s3-alpha-sig.figma.com/img/5c7d/c011/5351878d7a9556e9bb5e1b3327649990?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHL5NN1q9E7gxNeM28MXaP4CdQGW7pqq4ho6nycZnugFq55c5MC~hytSASRuTL2c4HzELQUWmpp~G8jzKub2hqQdF4O7O0wE3DAoU8qDVHF8wzJo1sSLFO6PbSgprADLnU9XUDFgpHUAKovwKgZJHtncZnkd~Rm8bXJwawT9fae5R2WCLzxjjij1gcoHfl8ZVf3A75T1ZnT4Ejt1tKnhF6zaFKaqnuOIXW6Lp7cZHqnwBSoobJ~xSKPkqp-Mtdy2zXmdPRi~Iea9XjDjT1hUL4syFTBGx-6yiFxAkmRA-4kwXkh4N8~KHfNaWl~X0Ltsp6DKVCUJiyDn6FwDyq5ImA__',
    },
    {
      image:
        'https://lh3.googleusercontent.com/p/AF1QipOV9s17zwuYuKUH3U_9MTH8tmkLi7R1v94hHXkz=s1360-w1360-h1020',
      thumbImage:
        'https://lh3.googleusercontent.com/p/AF1QipOV9s17zwuYuKUH3U_9MTH8tmkLi7R1v94hHXkz=s1360-w1360-h1020',
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/5c7d/c011/5351878d7a9556e9bb5e1b3327649990?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHL5NN1q9E7gxNeM28MXaP4CdQGW7pqq4ho6nycZnugFq55c5MC~hytSASRuTL2c4HzELQUWmpp~G8jzKub2hqQdF4O7O0wE3DAoU8qDVHF8wzJo1sSLFO6PbSgprADLnU9XUDFgpHUAKovwKgZJHtncZnkd~Rm8bXJwawT9fae5R2WCLzxjjij1gcoHfl8ZVf3A75T1ZnT4Ejt1tKnhF6zaFKaqnuOIXW6Lp7cZHqnwBSoobJ~xSKPkqp-Mtdy2zXmdPRi~Iea9XjDjT1hUL4syFTBGx-6yiFxAkmRA-4kwXkh4N8~KHfNaWl~X0Ltsp6DKVCUJiyDn6FwDyq5ImA__',
      thumbImage:
        'https://s3-alpha-sig.figma.com/img/5c7d/c011/5351878d7a9556e9bb5e1b3327649990?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHL5NN1q9E7gxNeM28MXaP4CdQGW7pqq4ho6nycZnugFq55c5MC~hytSASRuTL2c4HzELQUWmpp~G8jzKub2hqQdF4O7O0wE3DAoU8qDVHF8wzJo1sSLFO6PbSgprADLnU9XUDFgpHUAKovwKgZJHtncZnkd~Rm8bXJwawT9fae5R2WCLzxjjij1gcoHfl8ZVf3A75T1ZnT4Ejt1tKnhF6zaFKaqnuOIXW6Lp7cZHqnwBSoobJ~xSKPkqp-Mtdy2zXmdPRi~Iea9XjDjT1hUL4syFTBGx-6yiFxAkmRA-4kwXkh4N8~KHfNaWl~X0Ltsp6DKVCUJiyDn6FwDyq5ImA__',
    },
  ];
}
