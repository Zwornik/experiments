import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  ElementRef,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() seeModal = false;
  @Input() link: any = '';
  @Input() modalType = '';
  @Input() description = '';



constructor(private el:ElementRef){};
  
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
    console.log(this.modalType)
  }
  ngOnDestroy() {this.el.nativeElement.remove()}

  @Output() myClick = new EventEmitter<string>();

  onClick() {
    this.myClick.emit();
  }

  openLink(url: string){
    window.open(url, '_blank');
  }

}
