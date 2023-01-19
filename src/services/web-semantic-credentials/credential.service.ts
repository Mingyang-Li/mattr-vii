import { IAuth } from '@/dto/setup';

const createCredential = (auth: IAuth) => async () => {
  return { auth };
};

export const LinkedDataService = (auth: IAuth) => {
  return {
    createCredential: createCredential(auth),
  };
};
