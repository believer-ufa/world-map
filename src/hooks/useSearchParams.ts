import { useState } from 'react';

const useSearchParams = () => {
  return useState<URLSearchParams>(new URLSearchParams(window.location.search));
};

export default useSearchParams;
