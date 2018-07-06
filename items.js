var items = { // eslint-disable-line no-unused-vars
  1: {
    title: 'Tree',
    description: 'A Tree',
    verbs: {

    },
    interactions: [
      {
        with: 2,
        actions: [
          'delete self',
          'inventory 4x3'
        ]
      }
    ]
  },
  2: {
    title: 'Axe',
    description: 'A simple Axe',
    verbs: {
      'get': 'inventory'
    },
    interactions: [
      {
        with: 1,
        actions: [
          'delete other',
          'inventory 4x3'
        ]
      }
    ]
  },
  3: {
    title: 'wood',
    description: 'some wood',
    verbs: {
      'get': 'inventory'
    },
    interactions: [

    ]
  }
}
