import { AnimationTriggerMetadata, animate, query, sequence, state, style, transition, trigger } from "@angular/animations";

export const toggleModal: AnimationTriggerMetadata = trigger('toggleModal', [
  state('hide', style({
    top: '50%',
    width: '10px',
    height: '10px',
    padding: 0
  })),
  state('show', style({
    top: '*',
    width: '*',
    height: '*',
    padding: '*'
  })),
  transition(
    'hide => show', [
      sequence([
        query('.modal__content, .modal__close', [
          style({
            opacity: 0
          })
        ]),
        animate(
          '0.2s',
          style({
            top: '*'
          })
        ),
        animate(
          '0.3s',
          style({
            width: '*'
          })
        ),
        animate(
          '0.3s',
          style({
            height: '*',
            padding: '*'
          })
        ),
        query('.modal__content, .modal__close', [
          animate(
            '0.3s',
            style({
              opacity: 1
            })
          )
        ])
      ])
    ]
  )
]);