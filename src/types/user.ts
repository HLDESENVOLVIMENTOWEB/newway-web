export interface User {
    id: string;
    email: string;
    profiles: Profile[];
    status: 'ativo' | 'inativo';
  }
  
  export interface Profile {
    id: string;
    name: string;
    permissions: Permission[];
  }
  
  export interface Permission {
    id: string;
    module: string;
    entity: string;
    canCreate: boolean;
    canRead: boolean;
    canUpdate: boolean;
    canDelete: boolean;
  }
  