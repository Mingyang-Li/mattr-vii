interface PublicKey {
  id: string;
  type: string;
  controller: string;
  publicKeyBase58: string;
}

interface KeyAgreement {
  id: string;
  type: string;
  controller: string;
  publicKeyBase58: string;
}

interface DidDocument {
  "@context": string;
  id: string;
  publicKey: PublicKey[];
  authentication: string[];
  assertionMethod: string[];
  capabilityDelegation: string[];
  capabilityInvocation: string[];
  keyAgreement: KeyAgreement[];
}

interface Key {
  kmsKeyId: string;
  didDocumentKeyId: string;
}

interface LocalMetadata {
  keys: Key[];
  registered: number;
}

export interface ResolveDidReqResponse {
  didDocument: DidDocument;
  registrationStatus: string;
  localMetadata: LocalMetadata;
}
