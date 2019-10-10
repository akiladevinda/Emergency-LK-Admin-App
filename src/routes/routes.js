/** 
 * EmergencyLK 
 * Routing Screens of Application
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';
//All routing pages importing
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import HomeScreen from "../screens/AdminPanel/HomeScreen";
import ViewCrimeReports from "../screens/AdminPanel/Crime/ViewCrimeReports";



//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator({
    SplashScreen: {
      screen:SplashScreen,
      navigationOptions: { 
        header: null,  
        gesturesEnabled: false 
      },   
    },

    HomeScreen: {
        screen:HomeScreen,
        navigationOptions: { 
          header: null,  
          gesturesEnabled: false 
        },   
      },

    ViewCrimeReports: {
          screen:ViewCrimeReports,
          navigationOptions: { 
            header: null,  
            gesturesEnabled: false 
          },   
        },
}, {
    transitionConfig: () => fromRight(),
});
    
  //Make App Navigator to creating app container
  const AppContainer = createAppContainer(AppNavigator);

  //exporting App Conrainer with all routing pages
  export default AppContainer;
  
  