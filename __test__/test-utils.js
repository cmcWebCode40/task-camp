import {render} from '@testing-library/react-native'
import { TaskContextProvider } from 'libs/context/TaskContext'

const AllTheProviders = ({children}) => {
  return (
    <TaskContextProvider>
      {children}
    </TaskContextProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export {customRender as render}