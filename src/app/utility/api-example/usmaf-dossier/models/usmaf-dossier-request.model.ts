import { DossierTypeEnum, DossierTypeEnumAmount } from "../enums/dossier-type.enum";
import { SignRequestType } from "../enums/signature-request-type.enum";
import { DossierDTOType, DossierSendRequest } from "./usmaf-dossier-data.model";


export interface IApproveRequestByIdRequest {
    dossierId: number;
}

export interface IDossierByIdRequest {
    id: number;
    //version?: number;
    duplicate?: boolean; //if true it duplicates the dossier
}

export interface IDuplicateDossierRequest {
    idDossier: number;
}

export type IUpdateDossier = IDossierByIdRequest & DossierDTOType;

export type IInsertDossierRequest = DossierDTOType;

export interface IAssignDossierRequest {
    dossierIds: number[];
    anagIdAssignee: string | null;
}

export interface ISignDossierRequest {
    dossierIds: number[];
    signRequestType: SignRequestType
}

export interface IGetRateByDossierIdRequest {
    dossierId : number;
}

export interface ISendDossierRequest extends DossierSendRequest {}

export interface IGetRateStuffAmountRequest {
    officeId: number;
    certificateType: CertificateType;
}

export interface IGetRateStuffAmountDossierRequest {
    officeId: number;
    dossierType: DossierTypeEnumAmount;
}

export type CertificateType = 
    | 'BOAT_LICENSE'
    | 'DRIVER_LICENSE'
    | 'PORT_PILOT'
    | 'SEA_PEOPLE'
    | 'WORKING_ELIGIBILITY'
    | 'DEEP_SEA_DIVER'
    | 'UNDERWATER_WORKER'
    | 'SCUBA_DIVER'
    | 'FIRST_INSTANCE_MEDICAL_COMMISSION'
    | 'ANNUAL_DRUG_REGISTER'
    | 'DISINFECTION_EXEMPTION'
    | 'DRINKING_WATER_BOXES'
    | 'DRUG_REGISTER_RELEASE'
    | 'DRUGS_DESTRUCTION'
    | 'FOOD_BUSINESS'
    | 'FREE_HEALTHCARE_PRACTICE'
    | 'MEDICAL_GOODS_OR_WASTE'
    | 'MEDICINE_BOX'
    | 'NARCOTIC_REPLENISHMENT'
    | 'SANITATION_EXEMPTION';
