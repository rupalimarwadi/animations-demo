import { style, trigger, transition, animate, state, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({ offset: .2, opacity: 1, transform: 'translateX(20px)' }),
        style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
    ])),
);

export let fadeInAnimation = animation(
    [style({ opacity: 0 }), animate('{{ duration }} {{ easing }}')], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});
export let fadeOutAnimation = animation(
    [animate(2000, style({ opacity: 0 }))]
)


export let fade = trigger('fade', [
    // 2nd way
    transition(':enter',
        useAnimation(fadeInAnimation)
    ),
    transition(':leave', [
        useAnimation(fadeOutAnimation)
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(30px)' }), animate(500)
    ]),
    transition(':leave',
        useAnimation(bounceOutLeftAnimation)
    ),
])