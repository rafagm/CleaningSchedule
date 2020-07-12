import {
    trigger,
    state,
    style,
    animate,
    transition,
    sequence,
    query,
    stagger
  } from  "@angular/animations";

export const increaseSize = 
    trigger("increaseSize", [
      state('normal', style({
        transform: "scale(1)"
      })),
      state("big", style({
        transform: "scale(1.15)",
        border: "2px solid black"
      })),
      transition("normal => big", sequence([
        style({
            border: "2px solid black"
        }),
        animate(".2s")
      ])),
      transition("big => normal", [
        animate(".1s")
      ])
    ]);

export const setAnimation =
  trigger("setAnimation", [
    transition(":enter", [
      style({
        opacity: 0,
        transform: "translateY(100px)"
      }),      
      animate(".5s cubic-bezier(0.13, 0, 0.25, 1)",
        style({
          opacity: 1,
          transform: "none"
        })
      )]
    ),
    transition(":leave", [
      animate(".3s cubic-bezier(0.13, 0, 0.25, 1)",
      style({
        opacity: 0,
        height: "*",
        transform: "scale(0)"
      }))
    ])
    ]);