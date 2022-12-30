import {
  CreateDidReqBody,
  CreateDidReqResponse,
  IAuth,
  ResolveDidReqResponse,
  RetrieveDidsReqQuery,
  RetrieveDidsReqResponse,
  WellKnownDidConfigResponse,
} from "@/dto";

const createDid = async (
  auth: IAuth,
  args: CreateDidReqBody
): Promise<CreateDidReqResponse> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/core/v1/dids`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.authToken}`,
      },
      body: JSON.stringify(args),
    }
  );
  return await resp.json();
};

const retrieveDids = async (
  auth: IAuth,
  queryArgs?: RetrieveDidsReqQuery
): Promise<RetrieveDidsReqResponse> => {
  let url: string;
  switch (queryArgs) {
    case undefined:
      url = `https://${auth.tenantUrl}.vii.mattr.global/core/v1/dids`;
    default:
      const query = new URLSearchParams({
        limit: queryArgs!.limit.toString(),
        cursor: queryArgs!.cursor,
      }).toString();
      url = `https://${auth.tenantUrl}.vii.mattr.global/core/v1/dids?${query}`;
  }

  const resp = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${auth.authToken}`,
    },
  });

  return await resp.json();
};

const resolveDid = async (
  auth: IAuth,
  id: string
): Promise<ResolveDidReqResponse> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/core/v1/dids/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.authToken}`,
      },
    }
  );
  return await resp.json();
};

const deleteDid = async (auth: IAuth, id: string) => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/core/v1/dids/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${auth.authToken}`,
      },
    }
  );
  return await resp.json();
};

const wellKnownDidConfiguration = async (
  auth: IAuth
): Promise<WellKnownDidConfigResponse> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/.well-known/did-configuration`,
    { method: "GET" }
  );

  return await resp.json();
};

export {
  createDid,
  retrieveDids,
  resolveDid,
  deleteDid,
  wellKnownDidConfiguration,
};
