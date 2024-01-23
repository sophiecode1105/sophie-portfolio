import gsap from 'gsap';

export class Util {
    static scrollTo(y: number, duration = 1) {
        gsap.to(window, { duration, scrollTo: { y: y } });
    }
 }