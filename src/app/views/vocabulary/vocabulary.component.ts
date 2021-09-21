import { Component, OnInit, ViewChild } from '@angular/core';
import data from './data';
import { Ivocabulary } from './vocabulary';
import { WordPipe } from './pipe/word.pipe';
import { MatDialog } from '@angular/material/dialog';
import { PopupPracticeWritingComponent } from '../../components/popup-practice-writing/popup-practice-writing.component';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {



  listVocabulary: Array<Ivocabulary> = data;
  constructor(public wordPipe: WordPipe, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('data', data);
  }

  openDialog(item: Ivocabulary) {
    console.log('item', item);
    const dialogRef = this.dialog.open(PopupPracticeWritingComponent, {
      data: item,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
