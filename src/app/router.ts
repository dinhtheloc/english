import { NounComponent } from './views/noun/noun.component';
import { AdjectiveComponent } from './views/adjective/adjective.component';
import { VerbComponent } from './views/verb/verb.component';
import { PresentContinuousComponent } from './views/present-continuous/present-continuous.component';
import { SimplePastComponent } from './views/simple-past/simple-past.component';

const Routers = [
    {
        display: 'Danh từ (NOUN)',
        path: 'noun',
        component: NounComponent
    },
    {
        display: 'Tính từ (adjective)',
        path: 'adjective',
        component: AdjectiveComponent
    },
    {
        display: 'Động từ (verb)',
        path: 'verb',
        component: VerbComponent
    },
    {
        display: 'Hiện tại tiếp diễn (Present continuous)',
        path: 'present-continuous',
        component: PresentContinuousComponent
    },
    {
        display: 'Quá khứ đơn (Simple past)',
        path: 'simple-past',
        component: SimplePastComponent
    }
];

export default Routers;