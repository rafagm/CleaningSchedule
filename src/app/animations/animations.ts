import {
    trigger,
    state,
    style,
    animate,
    transition,
    sequence
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