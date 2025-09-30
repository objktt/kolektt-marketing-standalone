import { useState } from 'react';

export function useSigninModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  return {
    showSignInModal,
    setShowSignInModal,
  };
}