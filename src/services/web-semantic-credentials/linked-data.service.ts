import { IAuth } from '@/dto/setup';

const convertLinkedDataDocuments = (auth: IAuth) => async () => {
  return { auth };
};

export const LinkedDataService = (auth: IAuth) => {
  return {
    createPresentationTemplate: convertLinkedDataDocuments(auth),
  };
};
