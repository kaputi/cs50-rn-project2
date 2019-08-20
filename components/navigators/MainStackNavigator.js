import { createStackNavigator, createAppContainer } from 'react-navigation'

import TabNavigator from './TabNavigator'
import DetailsScreen from '../screens/Details'

const StackNavigator = createStackNavigator(
  {
    home: TabNavigator,
    details: DetailsScreen,
  },
  {
    initialRouteName: 'home',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
