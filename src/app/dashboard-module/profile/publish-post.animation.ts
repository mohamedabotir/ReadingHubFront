import { animate, animateChild, query, style, transition, trigger } from "@angular/animations";

export const pop = [trigger('popupParent',[
  transition(':enter',[style({
    opacity:0,}),
      animate('500ms',style({opacity:1})),
      query("@popupChild",[animateChild()])

    ]), transition(':leave',[
        animate('1000ms',style({opacity:0})),
        query("@popupChild",[animateChild()])

      ])
]),
trigger('popupChild',[
  transition(':enter',[style({
    opacity:0,transform:"translateX(60px)"}),
      animate('500ms',style({opacity:1,transform:"translateX(0px)"}))

    ]), transition(':leave',[
        animate('500ms',style({opacity:0,transform:"translateY(60px)"}))

      ])
])

]
