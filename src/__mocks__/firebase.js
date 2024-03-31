// __mocks__/firebase.js

export default {
    auth: () => ({
      signInWithEmailAndPassword: jest.fn(() => Promise.resolve()), // Mock successful login
    }),
    firestore: () => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          get: jest.fn(() => Promise.resolve({ data: () => ({}) })), // Mock data retrieval
        })),
      })),
    }),
    // ...
  };
  
  