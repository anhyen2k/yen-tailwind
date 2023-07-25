/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*{html,js}"],
  theme: {
    extend: {
      width: {
        '138': '138px',
        '330': '330px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '1460': '1460px',
        '8/10': '80%'
      },
      maxWidth: {
        '56': '56px'
      },
      height: {
        '330': '330px',
        '400': '400px',
        '450': '450px',
        '800': '800px'
      },
      maxHeight: {
        '44': '44px'
      },
      backgroundColor: {
        'bt-sky': '#4787e9',
        'online': '#00d98b',
        'img-ct': '#ECFEFF'
      },
      margin: {
        '50': '50px',
      },
      padding: {
        '50': '50px',
      }
    },
    fontFamily: {
      'barlowsemi': 'BarlowSemiCondensed',
      'barlowsemi-regular': 'BarlowSemiCondensed Regular',

      // fonts bt1
      'jamjuree-semibold' : 'Jamjuree-SemiBold',
      'jamjuree-regular' : 'Jamjuree-SemiBold',
      'jamjuree-light' : 'Jamjuree-Light',

      // fonts bt2
      'poppins-bold': 'Poppins-Bold',
      'poppins-light': 'Poppins-Light',
      'poppins-extra-light-talic': 'Poppins-ExtraLightItalic',
      'poppins-italic': 'Poppins-Italic',

      // fonts bt3
      'rubik-regular': 'Rubik-Regular',
      'rubik-bold': 'Rubik-Bold',
      'rubik-medium': 'Rubik-Medium',
      'rubik-light': 'Rubik-Light',
    },
    backgroundImage: {
      'ctn-img': "url('bg-img/bg-header-desktop.png')",
    }
    // scale: {
    //   'scale-60': 'transform: scale(.6);',
    //   'scale-70': 'transform: scale(.7);'
    // }
  },
  plugins: [],
}

