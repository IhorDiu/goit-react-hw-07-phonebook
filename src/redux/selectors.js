import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter], 
    ({items} , filter) => {return items.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase()))
  });



// state => {
//   const { items } = selectContacts(state);
//   const filter = selectFilter(state);
//   return items.filter(contacts =>
//     contacts.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };



// export const selectTaskCount = state => {
//     const tasks = selectTasks(state);
//     console.log("Calculating task count");
//     return tasks.reduce(
//       (count, task) => {
//         if (task.completed) {
//           count.completed += 1;
//         } else {
//           count.active += 1;
//         }
//         return count;
//       },
//       { active: 0, completed: 0 }
//     );
//   };