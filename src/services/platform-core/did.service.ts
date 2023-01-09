import {
  CreateDidArgs,
  CreateDidReqResponse,
  RetrieveDidsArgs,
  RetrieveDidsReqResponse,
  ResolveDidArgs,
  ResolveDidReqResponse,
  DeleteDidArgs,
  WellKnownDidConfigResponse,
} from '@/dto/platform-core/dids';
import { IAuth } from '@/dto/setup';
import fetch from 'node-fetch';

const createDid = async (
  args: CreateDidArgs,
): Promise<CreateDidReqResponse> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/dids`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${args.auth.authToken}`,
      },
      body: JSON.stringify(args.body),
    },
  );
  return await resp.json();
};

const retrieveDids = async (
  args: RetrieveDidsArgs,
): Promise<RetrieveDidsReqResponse> => {
  let url: string;
  const pagination = args.query.pagination;
  switch (pagination) {
    case undefined:
      url = `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/dids`;
    default:
      const query = new URLSearchParams({
        limit: pagination ? pagination.limit.toString() : '100',
        cursor: pagination ? pagination.cursor : '',
      }).toString();
      url = `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/dids?${query}`;
  }
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${args.auth.authToken}`,
    },
  });

  return await resp.json();
};

const resolveDid = async (
  args: ResolveDidArgs,
): Promise<ResolveDidReqResponse> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/dids/${args.id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${args.auth.authToken}`,
      },
    },
  );
  return await resp.json();
};

const deleteDid = async (args: DeleteDidArgs): Promise<void> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/dids/${args.id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${args.auth.authToken}`,
      },
    },
  );
  return await resp.json();
};

const wellKnownDidConfiguration = async (
  auth: IAuth,
): Promise<WellKnownDidConfigResponse> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/.well-known/did-configuration`,
    { method: 'GET' },
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
