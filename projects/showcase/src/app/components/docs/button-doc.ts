import { ButtonModule } from 'projects/components/src/lib/button/button';

export const BUTTON_DOC = {
  module: ButtonModule,
  category: 'buttons',
  componentName: 'ButtonComponent',
  path: 'button',
  description: 'If you click on this button you will go to heaven',
  props: [
    {
      name: 'buttonText',
      default: 'Button',
      description: 'Change text inside button',
    },
    {
      name: 'color',
      default: 'white',
      description: 'change text color of button',
    },
    {
      name: 'bagColor',
      default: 'blue',
      description: 'change text background color of button',
    },
  ],
  themes: [
    {
      title: 'ttGreen',
      // prettier-ignore
      definition: [
            {
              "primary":{color:"red", bgColor:"black", fontFamily:"Helvetica"}
            },
            {
              "ttGreen":{color:"red", bgColor:"black", fontFamily:"Helvetica"}
            },
            {
              "secondary":{color:"red", bgColor:"black", fontFamily:"Helvetica"}
            },
            {
              "dark":{color:"red", bgColor:"black", fontFamily:"Helvetica"}
            },
          ],
      description: 'The theme to be used for most turntabl stufss',
    },
  ],
  demo: [
    {
      title: 'others',
      description: 'The description of the demo',
      code: 'my code',
      view: '',
    },
  ],
};
