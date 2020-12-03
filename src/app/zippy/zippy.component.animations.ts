import {
    style, trigger, transition, animate,
    state, keyframes, animation, useAnimation, query, stagger, animateChild, group
} from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
    state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        opacity: 0
    })),
    // state('expanded', style({
    //   height: '*',
    //   padding: '*',
    //   overflow: 'auto'
    // })),
    transition('* => *', [animate('300ms ease-out', style({
        height: '*',
        paddingTop: 0,
        paddingBottom: 0,
    })), animate('1s', style({
        opacity: 1
    }))]),
    transition('*  => *', [animate('300ms ease-in')])
])