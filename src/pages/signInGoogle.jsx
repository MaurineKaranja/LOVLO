import { supabase } from '../components/supabaseClient';

function SignInWithGoogle() {
  const handleSignInWithGoogle = async () => {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: 'https://localhost:5173', // replace with your own redirect URL
        },
      });

      if (error) {
        throw error;
      }

      console.log(user);
      console.log(session);

    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div>
      <button className='google-button'onClick={handleSignInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default SignInWithGoogle;
