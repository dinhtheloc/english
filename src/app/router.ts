import { NounComponent } from './views/noun/noun.component';
import { AdjectiveComponent } from './views/adjective/adjective.component';
import { VerbComponent } from './views/verb/verb.component';
import { PresentContinuousComponent } from './views/present-continuous/present-continuous.component';
import { SimplePastComponent } from './views/simple-past/simple-past.component';
import { AdverbComponent } from './views/adverb/adverb.component';
import { PastContinuousComponent } from './views/past-continuous/past-continuous.component';
import { VocabularyComponent } from './views/vocabulary/vocabulary.component';

const Routers = [
    // {
    //     display: 'Động từ (verb)',
    //     path: 'verb',
    //     component: VerbComponent
    // },
    // {
    //     display: 'Trạng từ (adverb)',
    //     path: 'adverb',
    //     component: AdverbComponent 
    // },
    // {
    //     display: 'Tính từ (adjective)',
    //     path: 'adjective',
    //     component: AdjectiveComponent
    // },
    // {
    //     display: 'Danh từ (noun)',
    //     path: 'noun',
    //     component: NounComponent
    // },
    // {
    //     display: 'Hiện tại tiếp diễn (Present continuous)',
    //     path: 'present-continuous',
    //     component: PresentContinuousComponent
    // },
    // {
    //     display: 'Quá khứ đơn (Simple past)',
    //     path: 'simple-past',
    //     component: SimplePastComponent
    // },
    // {
    //     display: 'Quá khứ tiếp diễn (Past continuous)',
    //     path: 'past-continuous',
    //     component: PastContinuousComponent
    // }
    {
        display: 'Sổ tay cụm từ vựng',
        path: 'vocabulary',
        component: VocabularyComponent
    }
];

export default Routers;