import { Component, OnInit } from '@angular/core';
import data from './data';
import { Ivocabulary } from './vocabulary';
import { WordPipe } from './pipe/word.pipe';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {
  listVocabulary: Array<Ivocabulary> = data;
  constructor(public wordPipe: WordPipe) { }

  ngOnInit(): void {
    console.log('data', data);
  }


}
