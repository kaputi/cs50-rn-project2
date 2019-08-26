import { createStackNavigator, createAppContainer } from 'react-navigation'

import ListScreen from '../screens/List'
import DetailsScreen from '../screens/Details'

const StackNavigator = createStackNavigator(
  {
    home: ListScreen,
    details: DetailsScreen,
  },
  {
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
