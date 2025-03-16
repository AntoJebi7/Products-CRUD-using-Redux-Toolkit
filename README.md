# Products-CRUD-using-Redux-Toolkit + Web Storage API - Local Storage, React hook form + yup + Material UI 

# Core Functionality: Products CRUD (Create, Read, Update, Delete)

Purpose: The application allows users to perform standard CRUD operations on a list of products. This means users can:
Create: Add new product entries.
Read: View existing product information.
Update: Modify details of existing products.
Delete: Remove products from the list.   
Technical Stack:

# React: 
The foundation of the application, providing a component-based architecture for building the user interface.

# Redux Toolkit:
State Management: Manages the application's global state, specifically the product data.   
Simplified Redux: Simplifies Redux development with features like createSlice, configureStore, and createAsyncThunk, reducing boilerplate code.
Immutability: Enforces immutable state updates, ensuring predictable behavior.

# Web Storage API (Local Storage):
Persistence: Stores product data locally in the user's browser, allowing data to persist across page reloads.   
Offline Functionality (to a point): The app could display the data even without an active internet connection, as long as the data has been stored in local storage.

# React Hook Form:
Form Management: Provides an efficient and performant way to handle form inputs and validation.   
Simplified Form Logic: Reduces the complexity of form handling with hooks.   

# Yup:
Schema Validation: Defines schemas for validating form data, ensuring data integrity.   
Data Validation: Used in conjunction with React Hook Form to validate user input before submission.   

# Material UI:
UI Components: Provides a library of pre-built, customizable UI components, adhering to Material Design principles.
Consistent Design: Ensures a consistent and visually appealing user interface.
