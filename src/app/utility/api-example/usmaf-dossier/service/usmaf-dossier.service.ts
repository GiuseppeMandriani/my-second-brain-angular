import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IMDSBaseResponseModel, MDSBaseApiRequest, MDSBaseApiService, MDSEnvFacadeService } from "ngx-mds-components";
import { Observable } from "rxjs";
import { BaseApiAppSource } from "../../enums/baser-api-app-source.enum";
import { IApproveRequestByIdRequest, IAssignDossierRequest, IDossierByIdRequest, IDuplicateDossierRequest, IGetRateByDossierIdRequest, IGetRateStuffAmountDossierRequest, IGetRateStuffAmountRequest, IInsertDossierRequest, ISendDossierRequest, ISignDossierRequest, IUpdateDossier } from "../models/usmaf-dossier-request.model";
import { IAssignDossierResponse, IDeleteDossierResponse, IDossierResponse, IGetRateByDossierIdResponse, IGetRateStuffAmountDossierResponse, IGetRateStuffAmountResponse } from "../models/usmaf-dossier-response";
import { BaseResponseString, BaseResponseVoid } from "../models/usmaf-dossier-data.model";


// Data ultimo rilascio 22/9/2023
@Injectable({
    providedIn: 'root'
})

// V: 1.0.0
export class UsmafDossierService extends MDSBaseApiService {

    constructor(
        public override httpClient: HttpClient,
        public override envFacadeService: MDSEnvFacadeService,
    ) {
        super(httpClient, envFacadeService, BaseApiAppSource.USMAF);
        this.relativeEndpoint = `${this.baseEndpoint}/usmdossier`;
        this.relativeEndpointBFF = `${this.baseEndpoint}/usmbff`;
    }

    //PATCH /api/v1/dossier/{id}/approve

    public setApproveById(request: IApproveRequestByIdRequest): Observable<BaseResponseString> {

        const _urlPattern = `${this.relativeEndpoint}/dossier/{{dossierId}}/approve`;
        const _request = new MDSBaseApiRequest<IApproveRequestByIdRequest>(request, _urlPattern);

        return this._patch<IApproveRequestByIdRequest, BaseResponseString>(_request);


    }


    //GET /api/v1/dossier/{id}:
    public getDossierById(request: IDossierByIdRequest): Observable<IDossierResponse> {

        const _urlPattern = `${this.relativeEndpoint}/dossier/{{id}}`;
        const _request = new MDSBaseApiRequest<IDossierByIdRequest>(request, _urlPattern);

        return this._get<IDossierByIdRequest, IDossierResponse>(_request);

    };

    //GET /api/v1/dossier/{id}: // BFF variant
    public getDossierLabelsById(request: IDossierByIdRequest): Observable<IDossierResponse> {

        const _urlPattern = `${this.relativeEndpointBFF}/dossier/{{id}}`;
        const _request = new MDSBaseApiRequest<IDossierByIdRequest>(request, _urlPattern);

        return this._get<IDossierByIdRequest, IDossierResponse>(_request);

    };

    //PUT /api/v1/dossier/{id}:
    public updateDossier(request: IUpdateDossier): Observable<IDossierResponse> { //se duplicate = true, ritorna la vecchia pratica con la chiave 'replacedByIdDossier' valorizata con l'id della nuva pratica duplicata
        const _duplicateKeys: string[] = [
            "id"
        ];
        const _urlPattern = `${this.relativeEndpoint}/dossier/{{id}}`;
        const _request = new MDSBaseApiRequest<IUpdateDossier>(request, _urlPattern, null, undefined, null, _duplicateKeys);

        return this._put<IUpdateDossier, IDossierResponse>(_request);

    };

    //DELETE /api/v1/dossier/{id}:
    public deleteDossier(request: IDossierByIdRequest): Observable<IDeleteDossierResponse> { //se duplicate = true, ritorna la vecchia pratica con la chiave 'replacedByIdDossier' valorizata con l'id della nuva pratica duplicata

        const _duplicateKeys: string[] = [
            "id"
        ];

        const _paramsList: string[] = [
            "duplicate",
        ];
        const _urlPattern = `${this.relativeEndpoint}/dossier/{{id}}`;
        const _request = new MDSBaseApiRequest<IDossierByIdRequest>(request, _urlPattern, null, _paramsList, null, _duplicateKeys);

        return this._delete<IDossierByIdRequest, IDeleteDossierResponse>(_request);

    };

    // BFF version
    public deleteDuplicateDossier(request: IDossierByIdRequest): Observable<IDeleteDossierResponse> { //se duplicate = true, ritorna la vecchia pratica con la chiave 'replacedByIdDossier' valorizata con l'id
        const _duplicateKeys: string[] = [
            "id"
        ];

        const _paramsList: string[] = [
            "duplicate",
        ];
        const _urlPattern = `${this.relativeEndpointBFF}/dossier/{{id}}`;
        const _request = new MDSBaseApiRequest<IDossierByIdRequest>(request, _urlPattern, null, _paramsList, null, _duplicateKeys);

        return this._delete<IDossierByIdRequest, IDeleteDossierResponse>(_request);
    }

    //POST /api/v1/dossier:
    //TODO check bff with BE
    public insertDossierLabels(request: IInsertDossierRequest): Observable<IDossierResponse> {
        const _urlPattern = `${this.relativeEndpointBFF}/dossier`;
        const _request = new MDSBaseApiRequest<IInsertDossierRequest>(request, _urlPattern);

        return this._post<IInsertDossierRequest, IDossierResponse>(_request);
    };

    //POST /api/v1/dossier:
    public insertDossier(request: IInsertDossierRequest): Observable<IDossierResponse> {

        const _urlPattern = `${this.relativeEndpoint}/dossier`;
        const _request = new MDSBaseApiRequest<IInsertDossierRequest>(request, _urlPattern);

        return this._post<IInsertDossierRequest, IDossierResponse>(_request);

    };

    //PUT /api/v1/dossier/assignments:
    public assignDossier(request: IAssignDossierRequest): Observable<IAssignDossierResponse> {

        const _urlPattern = `${this.relativeEndpoint}/dossier/assignments`;
        const _request = new MDSBaseApiRequest<IAssignDossierRequest>(request, _urlPattern);

        return this._put<IAssignDossierRequest, IAssignDossierResponse>(_request);

    };

    // BFF

    //POST /api/v1/dossier/assignments:
    public signListDossier(request: ISignDossierRequest): Observable<BaseResponseVoid> {

        const _urlPattern = `${this.relativeEndpointBFF}/sign`;
        const _request = new MDSBaseApiRequest<ISignDossierRequest>(request, _urlPattern);

        return this._post<ISignDossierRequest, BaseResponseVoid>(_request);

    };

    //POST /api/v1/dossier/send
    public sentListDossier(request: ISendDossierRequest): Observable<BaseResponseVoid> {

        const _urlPattern = `${this.relativeEndpointBFF}/dossier/send`;
        const _request = new MDSBaseApiRequest<ISendDossierRequest>(request, _urlPattern);

        return this._post<ISendDossierRequest, BaseResponseVoid>(_request);

    };

    //GET /api/v1/dossier/{idDossier}/copy
    public duplicateDossier(request: IDuplicateDossierRequest): Observable<IDossierResponse> {

        const _urlPattern = `${this.relativeEndpointBFF}/dossier/{{idDossier}}/copy`;
        const _request = new MDSBaseApiRequest<IDuplicateDossierRequest>(request, _urlPattern);

        return this._get<IDuplicateDossierRequest, IDossierResponse>(_request);
    }

    //GET /api/v1/dossiers/{dossierId}/rate UPDATE 13/01/2025
    public getRateByDossierId(request: IGetRateByDossierIdRequest): Observable<IGetRateByDossierIdResponse> {
        const _urlPattern = `${this.relativeEndpointBFF}/dossiers/{{dossierId}}/rate`;
        const _request = new MDSBaseApiRequest<IGetRateByDossierIdRequest>(request, _urlPattern, null);
        return this._get<IGetRateByDossierIdRequest, IGetRateByDossierIdResponse>(_request);
    };

    //GET /api/v1/offices/{officeId}/certificates/{certificateType}/rate UPDATE 13/01/2025 (SOLO Prenotazioni visite Medico Legale)
    public getRateStuffAmount(request: IGetRateStuffAmountRequest): Observable<IGetRateStuffAmountResponse> {
        const _urlPattern = `${this.relativeEndpointBFF}/offices/{{officeId}}/certificates/{{certificateType}}/rate`;
        const _request = new MDSBaseApiRequest<IGetRateStuffAmountRequest>(request, _urlPattern, null);
        return this._get<IGetRateStuffAmountRequest, IGetRateStuffAmountResponse>(_request);
    };

    //GET /api/v1/offices/{officeId}/dossiers/VAX/rate UPDATE 17/01/2025 (SOLO Prenotazioni Vaccinazioni e altre pratiche)
    public getRateStuffAmountVax(request: IGetRateStuffAmountDossierRequest): Observable<IGetRateStuffAmountDossierResponse> {
        const _urlPattern = `${this.relativeEndpointBFF}/offices/{{officeId}}/dossiers/VAX/rate`;
        const _request = new MDSBaseApiRequest<IGetRateStuffAmountDossierRequest>(request, _urlPattern, null);
        return this._get<IGetRateStuffAmountDossierRequest, IGetRateStuffAmountDossierResponse>(_request);
    };


    

}
