import {
  Directive,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EventType } from '@workspace/event-type';


@Directive({
  selector: '[mhAudioContext]',
})
export class AudioContextDirective implements OnInit,
                                              OnDestroy {
  private platformId: string;
  private osc: OscillatorNode;
  private context: AudioContext | any;
  private volume: any;

  @Input() public frequency: number;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  public ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.context = new (window as any).AudioContext() || new (window as any).webkitAudioContext();
  }

  public ngOnDestroy(): void {
    this.context.close();
  }

  @HostListener(EventType.MOUSEENTER)
  public openOsc(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.volume = this.context.createGain();
    this.volume.gain.value = .05;
    this.volume.connect(this.context.destination);

    this.osc = this.context.createOscillator();
    this.osc.frequency.value = this.frequency;
    this.osc.connect(this.volume);
    this.osc.type = 'sine';
    this.osc.start();
  }

  @HostListener(EventType.MOUSELEAVE)
  public closeOsc(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.volume.gain.value = 0;

    setTimeout(() => {
      this.volume.disconnect(this.context.destination);
      this.volume = null;

      this.osc.stop(this.context.currentTime + 0.01);
      this.osc.disconnect(this.volume);
      this.osc = null;
    }, 50);
  }
}
