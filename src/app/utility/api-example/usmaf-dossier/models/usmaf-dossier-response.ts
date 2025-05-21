import { BaseResponseBigDecimal, BaseResponseDossierDto, BaseResponseVoid } from "./usmaf-dossier-data.model";


export interface IDossierResponse extends BaseResponseDossierDto { }

export interface IDeleteDossierResponse extends BaseResponseVoid { }

export interface IAssignDossierResponse extends BaseResponseVoid { }

export interface IGetRateByDossierIdResponse extends BaseResponseBigDecimal{}
export interface IGetRateStuffAmountResponse extends BaseResponseBigDecimal{}
export interface IGetRateStuffAmountDossierResponse extends BaseResponseBigDecimal{}