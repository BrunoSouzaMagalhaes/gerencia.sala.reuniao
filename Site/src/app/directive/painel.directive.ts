import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { jsPanel } from 'jspanel4';

@Directive({
  selector: '[appPainel]'
})
export class PainelDirective implements OnInit {

  @Input() titulo: string;
  @Input() width: string;
  @Input() height: string;
  @Output() onInitPainel = new EventEmitter();
  @Output() onResize = new EventEmitter<any>();

  private contentSize: string;
  public painel: any;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.height = this.height ? this.height : '500';
    this.width = this.width ? this.width : '1000';
    this.contentSize = this.width + ' ' + this.height;
    this.abrir();

    this.painel.height = this.height;
    this.painel.width = this.width;
    this.redimensionou();
  }

  redimensionou() {
    this.onResize.emit(this.painel);
  }

  abrir() {
    const self = this;
    this.painel = jsPanel.create({
      theme: {
        bgPanel: '#077765',
        bgContent: '#bfe7e0',
        colorHeader: '#f0f0f0',
        colorContent: '#333'
      },
      headerTitle: this.titulo,
      position: 'center-top 0 58',
      contentSize: this.contentSize,
      content: this.el.nativeElement,
      callback: function () {
        this.content.style.padding = '20px';
        self.onInitPainel.emit(self.painel);
      },
      onbeforeclose: function () {
        return true;
        // return confirm('Do you really want to close the panel?');
      },
      resizeit: {
        start: function (panel, paneldata, e) {
          self.painel.height = paneldata.height;
          self.painel.width = paneldata.width;
          self.redimensionou();
        }
      }
    });
  }
}
