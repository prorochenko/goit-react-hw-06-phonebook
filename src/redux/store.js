import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contactsSlice';
import { myValueSlice, myItemsSlice } from './filterSlice';

export default configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: myItemsSlice.reducer,
    contact: contactsSlice.reducer,
  },
});
