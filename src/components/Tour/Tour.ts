import Shepherd from 'shepherd.js'

const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
    classes: 'shadow-md bg-purple-dark',
    scrollTo: true
  }
})

tour.addStep({
  id: 'Start learning',
  text: 'You can start your learning process here',
  attachTo: {
    element: '.tour-step2',
    on: 'top'
  },
  classes: 'sheperd-container',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    },
    {
      text: 'Dismiss',
      action: tour.complete
    }
  ]
})
tour.addStep({
  id: 'Scores',
  text: 'your score will show here.',
  attachTo: {
    element: '.tour-step3',
    on: 'top'
  },
  classes: 'sheperd-container',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    },
    {
      text: 'Dismiss',
      action: tour.complete
    }
  ]
})
tour.addStep({
  id: 'Settings',
  text: 'Finally you can select which notes and which string and frets you wanna focus on here.',
  attachTo: {
    element: '.v-app-bar-nav-icon',
    on: 'bottom'
  },
  classes: 'sheperd-container',
  buttons: [
    {
      text: 'Finish',
      action: tour.next
    },
    {
      text: 'Dismiss',
      action: tour.complete
    }
  ]
})

export { tour }
