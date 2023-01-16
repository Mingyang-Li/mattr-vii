/* eslint-disable @typescript-eslint/ban-types */
type IAuth = {};
type CreateDidArgs = {};
type CreateDidReqResponse = {};

// did.service.ts
export const createDid =
  (auth: IAuth) =>
  async (args: CreateDidArgs): Promise<CreateDidReqResponse> => {
    console.log({ auth, args });
    return await {};
  };

// bundle ALL services for DID
export const DidService = (auth: IAuth) => {
  return {
    createDid: createDid(auth),
  };
};

// client.ts
export const MattrViiClient = (auth: IAuth) => {
  return {
    PlatformCore: {
      DIDs: DidService(auth),
    },
  };
};

const client = MattrViiClient({});
export const did = client.PlatformCore.DIDs.createDid({});
