import React from 'react'
import { StatusBar } from 'react-native'

const ActionStatusBar = () => {
    return (
        <StatusBar 
          barStyle = "dark-content" 
          hidden = {false} 
          backgroundColor = "#00D2B2" 
          translucent = {true}
      />
    )
}

export { ActionStatusBar }