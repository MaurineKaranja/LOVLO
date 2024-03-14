// // AuthContext.js

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { supabase } from '../components/supabaseClient'; // Import your Supabase client

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     setUser(supabase.auth.user());

//     const subscription = supabase.auth.onAuthStateChange((event, session) => {
//       setUser(session?.user ?? null);
//     });

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   const signIn = async () => {
//     try {
//       const { error } = await supabase.auth.signIn();
//       if (error) throw error;
//     } catch (error) {
//       console.error('Error signing in:', error.message);
//     }
//   };

//   const signOut = async () => {
//     try {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;
//     } catch (error) {
//       console.error('Error signing out:', error.message);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, signIn, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

