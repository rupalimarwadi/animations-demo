import { style, trigger, transition, animate, state } from '@angular/animations';
export let fade = trigger('fade', [
    // Cleaner way
    state('void', style({ opacity: 0 })),
    transition('void <=> *', [
        animate(2000)
    ]),
    // void => * alias :enter
    // * => void alias :leave
    // 1st way
    // state('void', style({ opacity: 0 })),
    // transition('void => *', [
    //   animate(2000)
    // ]),
    // transition('* => void', [
    //   animate(2000)
    // ])

    // 2nd way
    // transition('void => *', [
    //   style({ opacity: 0 }), animate(2000)
    // ]),
    // transition('* => void', [
    //   animate(2000, style({ opacity: 0 }))
    // ])
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(30px)' }), animate(500)
    ]),
    transition(':leave', [
        animate('0.5s cubic-bezier(.17,.67,.83,.67)', style({ transform: 'translateX(-100%)' })),
    ]),
])