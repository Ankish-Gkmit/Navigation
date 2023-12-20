// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//   ],
// };


// 'react-native-reanimated/plugin',

// module.exports = {
//   presets: [
//   // 'module:@react-native/babel-preset',
//   'module:metro-react-native-babel-preset'
// ],
//   "plugins": [
//      ['module-resolver',
//        {
//          "root": ['.'],
//          "extensions": ['.ios.js', '.android.js', '.js','.ts', '.tsx', '.json'],
//          "alias": {
//            "components" : "./src/components",
//            "screens": './src/screens',
//            "config" : './src/config',
//            "assets" : './src/assets'

//         }
//       }
//     ,'react-native-reanimated/plugin'
//   ]
// ]
// }



module.exports = {
  presets: ['module:@react-native/babel-preset',
  'module:metro-react-native-babel-preset'
],
  plugins: [
    [
      'module-resolver',
      {
        // root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
           "components" : "./src/components",
           "screens": './src/screens',
           "config" : './src/config',
           "assets" : './src/assets'
        }
      }
      ,
      'react-native-reanimated/plugin'
    ]
  ]
};
