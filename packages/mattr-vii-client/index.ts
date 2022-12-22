export namespace MattrViiClient {
  export namespace PlatformCore {
    export namespace DIDs {
      export const createDID = () => {
        return "did_created";
      };
      export const retrieveDIDs = () => {
        return ["did_1", "did_2"];
      };
    }
    export namespace Messaging {
      export const signMessage = () => {
        return "signed_msg";
      };
      export const encryptMessage = () => {
        return "encrypt_msg";
      };
    }
  }
  export namespace WebSemanticCredentials {
    export namespace Presentations {
      export const createPresentationTemplate = () => {
        return "presentation_template";
      };
      export const createPresentationRequest = () => {
        return 'presentation_request'
      }
    }
    export namespace Credentials {
        export const createCredential = () => {
            return 'credential_created'
        }
    }
  }
  export namespace CompactCredentials {
    export namespace Core {
      export const createCompactCredential = () => {
        return 'createCompactCredential';
      }
      export const verifyCompactCredential = () => {
        return 'verifyCompactCredential'
      }
    }
    export namespace PdfTemplatemanagement {
      export const listPdfTemplates = () => {
        return 'listPdfTemplates'
      }
      export const updatePdfTemplate = () => {
        return 'updatePdfTemplate'
      }
    }
  }
}
