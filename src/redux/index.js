import { configureStore } from '@reduxjs/toolkit'

import rooms from './slices/rooms'
import user from './slices/users'

const reducer = {
    rooms,
    user,
  }

export const store = configureStore({ reducer })
