import {
  CreateDidReqBody,
  CreateDidReqResponse,
  IMattrViiClient,
  ResolveDidReqResponse,
  RetrieveDidsReqQuery,
  RetrieveDidsReqResponse,
  WellKnownDidConfigResponse,
} from "mattr-vii-types";

const createDid = async (
  auth: IMattrViiClient,
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
  auth: IMattrViiClient,
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
  auth: IMattrViiClient,
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

const deleteDid = async (auth: IMattrViiClient, id: string) => {
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
  auth: IMattrViiClient
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
