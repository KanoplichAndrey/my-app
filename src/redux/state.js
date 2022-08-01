
import { renderEntireTree } from '../render';
const state = {
  header: {
    menuItems: [
      'Home',
      'Features',
      'Pricing',
      'About Us'
    ]
  },
  content: {
    array1: [
      {
        infoPerson: 'John Shinoda',
        time: 'Hey man, how R U???…',
        profession: '10:20'
      },
      {
        infoPerson: 'Dina Harrison',
        time: 'Hey, call me please…',
        profession: '10:20'
      },
      {
        infoPerson: 'Mandy Guoles',
        time: 'Let me be alone, please…',
        profession: '10:20'
      },
      {
        infoPerson: 'Sam Pettersen',
        time: 'Hey dude, where is my…',
        profession: '10:20'
      }
    ],

    array2: [
      {
        infoPerson: 'PhotoDanver.jpg',
        time: '10.12.2020 at 11:43',
        profession: '175 Kb'
      },
      {
        infoPerson: 'PhotoDanver.jpg',
        time: '10.12.2020 at 11:43',
        profession: '175 Kb'
      },
      {
        infoPerson: 'PhotoDanver.jpg',
        time: '10.12.2020 at 11:43',
        profession: '175 Kb'
      },
      {
        infoPerson: 'PhotoDanver.jpg',
        time: '10.12.2020 at 11:43',
        profession: '175 Kb'
      }
    ],
    iconePerso: ['IconePerson', 'IconePerson', 'IconePerson', 'IconePerson']
  },
  feature: {
    array: [
      {
        contentHeader: 'First Feature ',
        contentContent: 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons',
        link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry',
        contentFooter: 'Learn More'
      },
      {
        contentHeader: 'Second Feature ',
        contentContent: 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons',
        link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry',
        contentFooter: 'Learn More'
      },
      {
        contentHeader: 'First Feature ',
        contentContent: 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons',
        link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry',
        contentFooter: 'Learn More'
      }, {
        contentHeader: 'First Feature ',
        contentContent: 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons',
        link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry',
        contentFooter: 'Learn More'
      }
    ]
  },

  // const SelectTeammates = ['User 1', 'User 2', 'User 3'];
  // const cartPrising = [
  //   'Month',
  //   '1',
  //   '2',
  //   '3',
  //   '5',
  //   '6',
  //   '7',
  //   '8',
  //   '9',
  //   '10',
  //   '11',
  //   '12'
  // ];
  testimonials: {
    array3: [
      {
        ContentCart:
               '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
        infoPerson: 'Alexander F ',
        profession: 'IT Admin at Digital Group'
      },
      {
        ContentCart:
               '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
        infoPerson: 'Robert B ',
        profession: 'Designer at Digital Group'
      },
      {
        ContentCart:
               '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
        infoPerson: 'Vadim Z ',
        profession: '‘‘Executive at Digital Group'
      },
      {
        ContentCart:
               '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
        infoPerson: 'Alexander F ',
        profession: 'IT Admin at Digital Group'
      },
      {
        ContentCart:
               '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
        infoPerson: 'Robert B ',
        profession: 'Designer at Digital Group'
      },
      {
        ContentCart:
               '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
        infoPerson: 'Vadim Z ',
        profession: 'Executive at Digital Group'
      }
    ]
  },
  footer: {
    textInfo: ['Privacy Policy', 'Terms of Conditions', 'Legal', 'Help'],
    textInfo1: ['© 2020 All rights reserved'],
    post: [{ names: 'andrey' }],
    newPostText: ['7ujmn pole']
  }

};
window.state = state;
export const addPost = () => {
  const newPost = {
    names: state.footer.newPostText
  };
  state.footer.post.push(newPost);
  state.footer.newPostText = '';
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.footer.newPostText = newText;
  renderEntireTree(state);
};

export default state;
