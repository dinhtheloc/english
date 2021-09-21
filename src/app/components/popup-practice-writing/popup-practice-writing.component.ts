import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ivocabulary } from '../../views/vocabulary/vocabulary';

@Component({
  selector: 'app-popup-practice-writing',
  templateUrl: './popup-practice-writing.component.html',
  styleUrls: ['./popup-practice-writing.component.scss']
})
export class PopupPracticeWritingComponent implements OnInit {
  sentence = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: Ivocabulary) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  setSentence(sentence: string) {
    this.sentence = sentence;
  }

}
