import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amortizacao',
  templateUrl: './amortizacao.component.html',
  styleUrls: ['./amortizacao.component.css'],
})
export class AmortizacaoComponent implements OnInit {
  pv: number = 0;
  i: number = 0;
  n: number = 0;

  constructor() {}

  ngOnInit() {}

  prestacao() {
    let pv = Number(this.pv);
    let i = Number(this.i) / 100;
    let n = Number(this.n);

    let p = (pv * (Math.pow(1 + i, n) * i)) / (Math.pow(1 + i, n) - 1);
    return p;
  }
}
