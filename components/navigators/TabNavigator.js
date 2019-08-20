import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import SettingsScreen from '../screens/Settings'
import ListsScreen from '../screens/List'

const TabNavigator = createBottomTabNavigator(
  {
    search: ListsScreen,
    settings: SettingsScreen,
  },
  {
    initialRouteName: 'search',
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarLabel: ({ tintColor }) => {
        const { routeName } = navigation.state
        let label
        if (routeName === 'search') label = 'Search'
        if (routeName === 'settings') label = 'Settings'

        return <Text style={{ color: tintColor }}>{label}</Text>
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: 'red',
      activeTintColor: 'blue',
    },
  }
)

export default TabNavigator
