import { IMDSBaseResponseModel } from "ngx-mds-components";
import { PerformanceTypeEnum } from "src/app/shared/performance/enums/performance-type.enum";
import { AnagTypeEnum } from "../../umsmaf-anagraphic/enums/anag-type.enum";
import { MedicalDeviceDto, PhysicalPersonDto } from "../../umsmaf-anagraphic/models/usmmaf-anagraphic-data.model";
import { DossierStateEnum } from "../../usmaf-search/enums/dossier-state.enum";
import { AuthorizationTypeEnum } from "../enums/authorization-type.enum copy";
import { CertificateTypeEnum } from "../enums/certificate-type.enum";
import { RemainsTypeEnum } from "../enums/death-type.enum";
import { DossierTypeEnum } from "../enums/dossier-type.enum";
import { EyeSideEnum } from "../enums/eye-side.enum copy";
import { OutComeTypeEnum } from "../enums/outcome-type.enum";
import { DossierRequestTypeEnum } from "../enums/request-type.enum";
import { SubjectRoleEnum } from "../enums/subject-role.enum";
import { SignatureStateEnum } from "ngx-mds-components"
import { AnagDataSourceEnum } from "../../umsmaf-anagraphic/enums/anag-data-source.enum";
import { SanitationTypeEnum } from "../enums/sanitation-type.enum";

export interface VaccinationRequestDto {
    dossierId?: number;
    id?: number;
    performanceType?: PerformanceTypeEnum;
    antigen?: number;
    formulation?: string;
    lotId?: number;
    lotCode?: string;
    previousVaccinations?: boolean;
    previousVaccinationYear?: number;
    administeredDose?: string;
    quantity?: string;
    inoculationSite?: string;
    responsibleDoctor?: string;
    immediateNegativeEffects?: boolean;
    effects?: string;
    measuresTaken?: string;
    vaccineCost?: number //manca su swagger
    specifyInoculationSite?: string; //manca su swagger
}

export interface ExemptionDto {
    dossierId?: number;
    id?: number;
    performanceType?: PerformanceTypeEnum;
    antigen?: number;
    previousVaccinations?: boolean;
    previousVaccinationYear?: number;
    responsibleDoctor?: string;
    validity?: string;
    reason?: string;
}

export interface FacilityToNotifyDto {
    dossierId?: number;
    id?: number;
    structureName: string;
    structureLabel?: string;
}

export interface TaricStuffDossierDto {
    id?: number;
    idDossier?: number;
    taricCode?: string;
    taricCodeLabel?: string;
    taricMacroCategory?: string;
    taricMacroCategoryLabel?: string;
    description?: string;
    goodsUsage?: string;
    goodsUsageLabel?: string;
    stuffClass?: string;
    stuffClassLabel?: string;
    stuff?: DeviceDto | MedicinalDto | ReachDto;
}

export interface DeviceDto {
    id?: number;
    stuffClass?: string;
    stuffClassLabel?: string;
    deviceType?: string;
    deviceTypeLabel?: string;
    noBdRdmIdentification?: boolean;
    deviceReferenceLegislation?: string;
    deviceReferenceLegislationLabel?: string;
    deviceCeLegislation?: string;
    deviceCeLegislationLabel?: string;
    implantable?: string | boolean;
    implantableLabel?: string;
    itcaIdentification?: string;
    medicalDevices?: MedicalDeviceDto[];
}

export interface AnagRefDto {
    anagId: string;
    anagVersion?: number;
}

export interface MedicinalDto {
    id?: number;
    stuffClass?: string;
    stuffClassLabel?: string;
    // medicinalRequestType?: string;
    // medicinalRequestTypeLabel?: string;
    medicinalRequestType?: string[];
    medicinalRequestTypeLabel?: string[];
    pharmaceuticalForm?: string;
    pharmaceuticalFormLabel?: string;
    dosage?: string;
    dosageLabel?: string;
    unitOfMeasure?: string;
    unitOfMeasureLabel?: string;
    implantable?: string | boolean;
    patientAge?: number;
    patientInitials?: string;
    determinaAifa?: string;
    itcaIdentification?: string;
    prescribingDoctor?: AnagRefDto;
}

export interface ReachDto {
    id?: number; // integer($int64)
    stuffClass?: string;
    authorizationNumber?: string;
    ufiNumber?: string;
    controlTypes?: string[]; // Array di stringhe
    controlTypesLabel?: string[]; // Array di stringhe

}

export interface ContainerDto {
    id?: number;
    idDossier?: number;
    containerAbbreviations?: string;
    containerSeal?: string;
    newContainerSeal?: string;
}

export interface A3Dto {
    id?: number;
    idDossier?: number;
    mmaIdentifier?: string;
    a3IdentifierOfficeId?: string;
    a3IdentifierCin?: string;
    a3IdentifierDate?: string;
    a3IdRegistrOffice?: string;
}

export interface TransportDataDto {
    anagId?: string | null; //I-E
    anagVersion?: number; //I-E
    deceasedName?: string;
    deceasedLastName?: string;
    deceasedBirthDate?: number;
    deceasedBirthCountry?: string;
    deceasedBirthPlace?: string;
    deathCountry?: string;
    deathPlace?: string;
    deathDate?: number;
    provenanceCountry?: string | null; //IE stato provenienza
    provenanceCountryLabel?: string | null; //IE
    provenancePlace?: string | null; //IE luogo provenienza
    provenanceProvince?: string | null; //I provincia provenienza
    provenanceProvinceLabel?: string | null; //I label
    provenanceVehicle?: string | null; //mezzo di trasporto (provenienza?)
    provenanceVehicleLabel?: string | null; // label
    sr?: RemainsTypeEnum | string; //I-E tipo S R
    srLabel?: string;
    arrivedOn?: number | null; //E? data di arrivo (a destinazione? --> serve altra data x italia)
    destinationCountry?: string | null; //E STATO destinazione
    destinationPlace?: string | null; //I luogo destinazione
    destinationProvince?: string | null; //I provincia destinazione
    destinationProvinceLabel?: string | null; //I label
    destinationVehicle?: string | null;  //E mezzo trasporto verso l'estero
    destinationVehicleLabel?: string | null;  //I label
    arrivalVehicleIdentifier?: string | null; //I mezzo arrivo in Italia ID
    abroadVehicleIdentifier?: string | null; //E mezzo trasporto verso estero ID
    transportVehicleIdentifier?: string | null; //I-E mezzo trasporto ID
    transportInItaly?: string | null;  //I-E  mezzo trasporto in Italia
    transportInItalyLabel?: string | null;  //I-E label
    //TODO aggiungere
    arrivalVehicle?: string | null; //I mezzo arrivo in Italia
    arrivalVehicleLabel?: string; //I mezzo arrivo in Italia
    abroadVehicle?: string | null;  //E mezzo trasporto verso estero
    abroadVehicleLabel?: string | null;  //E mezzo trasporto verso estero
    arrivedInItalyOn?: number | null; //I data di arrivo in Italia
    destinationCountryLabel?: string | null;
}

export interface EmbassyAuthorizationDto {
    embassy?: string;
    issuePlace?: string;
    issueDate?: number;
}

export interface CountryAuthorizationDto {
    municipalPlace?: string;
    province?: string;
    authorizationDate?: number;
    provinceLabel?: string;
}

export interface UsmafPartDto {
    portAirport?: string;
    region?: string;
}

export interface SubjectDto {
    dossierId?: number;
    id?: number;
    role: SubjectRoleEnum | string;
    anagType: AnagTypeEnum;
    anagId: string;
    anagVersion: number;
    anagTypeLabel?: string;
    roleLabel?: string;
    dataSource?: AnagDataSourceEnum;
}

/* export interface AttachmentDto {
    dossierId?: number;
    id?: number;
    type?: string;
    name?: string;
    documentId?: string;
    dimension?: number;
} */

export interface DossierNoteDto {
    dossierId?: number;
    id?: number;
    note: string;
}

/* export interface PaymentDto {
    dossierId?: number;
    id?: number;
    paymentId: number;
} */

// export interface AnagRefDto {
//     anagId: string;
//     anagVersion?: number | null; //non obbligatoria per BE
// }

export interface AcousticExaminationDto {
    id?: number;
    stimEarLeft?: number;
    stimEarRight?: number;
    simpleStimLightRapidity?: number; //minimum 0 maximum 10
    simpleStimLightRegularity?: number; //minimum 0 maximum 10
    simpleStimAcousticRapidity?: number; //minimum 0 maximum 10
    simpleStimAcousticRegularity?: number; //minimum 0 maximum 10
    complexStimLightRapidity?: number; //minimum 0 maximum 10
    complexStimLightRegularity?: number; //minimum 0 maximum 10
    complexStimAcousticRapidity?: number; //minimum 0 maximum 10
    complexStimAcousticRegularity?: number; //minimum 0 maximum 10
    complexStimVisualAlertRapidity?: number; //minimum 0 maximum 10
    complexStimVisualAlertRegularity?: number; //minimum 0 maximum 10
    complexStimAcousticAlertRapidity?: number; //minimum 0 maximum 10
    complexStimAcousticAlertRegularity?: number; //minimum 0 maximum 10
    complexStimVisualVigilanceRapidity?: number; //minimum 0 maximum 10
    complexStimVisualVigilanceRegularity?: number; //minimum 0 maximum 10
    complexStimAcousticSelectivityRapidity?: number; //minimum 0 maximum 10
    complexStimAcousticSelectivityRegularity?: number; //minimum 0 maximum 10
    unilateralHearingLeft?: number; //minimum 1 maximum 2
    unilateralHearingRight?: number; //minimum 1 maximum 2
    hearingDegreeOfReductionLeft?: number;
    hearingDegreeOfReductionRight?: number;
    bilateralHearing?: number;
    hearingDegreeOfReduction?: number;
    hearingAid?: number; //minimum 1 maximum 3
    adaptations?: boolean;
}

export interface EyeExaminationMeasuresDto {
    eyeExaminationId?: number;
    eyeSide: EyeSideEnum;
    nakedEye?: number; //minimum 0 maximum 10
    correctRefraction?: number; //minimum 0 maximum 10
    refractionDegree?: number; //minimum 0 maximum 10
    visualAcuity?: number; //minimum 0 maximum 10
    monocularVision?: number; //minimum 1 maximum 2
    monocularVisionReduction?: number; //minimum 0 maximum 10

}

export interface EyeExaminationDto {
    id?: number;
    chromaticSense?: number; //minimum 1 maximum 3
    chromaticSenseAltered?: number; //minimum 0 maximum 3
    viewField?: number; //minimum 1 maximum 2
    stereoscopicSense?: number; //minimum 1 maximum 2
    binocularVision?: number; //minimum 1 maximum 2
    binocularVisionReduction?: number; //minimum 1 maximum 2
    nightVision?: number; //minimum 1 maximum 2
    contrastSensitivity?: number; //minimum 1 maximum 2
    eyesExaminations?: EyeExaminationMeasuresDto[];
}

export interface CertificateDto {
    dossierId?: number;
    id?: number;
    certificateType: CertificateTypeEnum;
    visitOutcome: number; //minimum 1 maximum 3
    tribute?: number;
    otherExpenses?: string;
    notes?: string;
}

export interface BoatLicenseDto extends CertificateDto {
    anamnesticNotes?: string;
    clinicNotes?: string;
    diagnosticNotes?: string;
    requestType: number;
    requestTypeLabel?: string;
    licenseCategory: number;
    boatType?: number; //minimum 0 maximum 2
    navigationLimit?: number;
    height?: number;
    weight?: number;
    reqLens?: boolean;
    reqHearingAid?: boolean;
    otherPrescriptions?: string;
    observations?: string;
    doctor: AnagRefDto;
    acousticExamination: AcousticExaminationDto;
    eyeExamination: EyeExaminationDto;
}

export interface DeepSeaDiverDto extends CertificateDto {
    anamnesticNotes?: string;
    clinicNotes?: string;
    diagnosticNotes?: string;
    annotations?: string;
    doctor?: AnagRefDto;
}

export interface DriverLicenseDto extends CertificateDto {
    anamnesticNotes?: string;
    clinicNotes?: string;
    diagnosticNotes?: string;
    requestType: number; //minimum 1 maximum 4
    requestTypeLabel?: string;
    licenseCategory: string;
    reclassification?: boolean;
    height?: number;
    weight?: number;
    licenseNumber?: string;
    releasedBy?: number;
    releaseCity?: string;
    releaseDate?: number;
    reqLens?: boolean;
    reqContactLenses?: boolean;
    reqHearingAid?: boolean;
    otherPrescriptions?: string;
    observations?: string;
    personalExclusion?: boolean;
    //mandatoryWhileDriving?: string;
    doctor: AnagRefDto;
    acousticExamination: AcousticExaminationDto;
    eyeExamination: EyeExaminationDto;

}

export interface FirstInstanceMedicalCommissionDto extends CertificateDto {
    anamnesticNotes?: string;
    clinicNotes?: string;
    diagnosticNotes?: string;
    navigationAccomplished?: string;
    qualification?: string;
    registratioNumber?: string;
    compartment?: string;
    physicalInfirmities?: string;
    previousVisits?: string;
    medicalHistoryExams?: string;
    diagnosis?: string;
    reasonedDeliberation?: string;
    reunionDate?: number;
    portAuthorities?: string;
    portDoctor?: AnagRefDto;
    portDoctorName?: string;
    inpsDoctor?: AnagRefDto;
    inpsDoctorName?: string;
    inailDoctor?: AnagRefDto;
    inailDoctorName?: string;
    dissentingJudgement?: boolean;
    dissentingReason?: string;
    dissentingDoctor?: number;
}

export interface PortPilotDto extends CertificateDto {
    anamnesticNotes?: string;
    clinicNotes?: string;
    diagnosticNotes?: string;
    height: number;
    weight: number;
    chestPerimeter: number;
    observations?: string;
    commiteeChairman: AnagRefDto;
    acousticExamination: AcousticExaminationDto;
    eyeExamination: EyeExaminationDto;
}

export interface SeaPeopleDto extends CertificateDto {
    anamnesticNotes?: string;
    clinicNotes?: string;
    diagnosticNotes?: string;
    height: number;
    weight: number;
    chestPerimeter: number;
    thoracicOrgans: string;
    addominalOrgans: string;
    otherOrgansApparatus: string;
    hairDesc: string;
    eyelashesDesc: string;
    eyesDesc: string;
    forheadDesc: string;
    noseDesc: string;
    visageDesc: string;
    colorfulDesc: string;
    partiularSigns: string;
    bloodGroup?: number;
    anythingElse?: string;
    enabledTo: number;
    category?: number;
    art: number;
    exclusion?: number;
    prescriptions?: string;
    portDoctor: AnagRefDto;
    acousticExamination?: AcousticExaminationDto;
    eyeExamination: EyeExaminationDto;
}

export interface UnderwaterWorkerDto extends CertificateDto {
    anamnesticNotes?: string;
    clinicNotes?: string;
    diagnosticNotes?: string;
    anamnesi?: boolean;
    perimeterWeitghtStature?: boolean;
    spirometricExam?: boolean;
    apneaTimes?: boolean;
    objectiveExam?: boolean;
    eyeExamination?: boolean;
    otolaryngoiatricExam?: boolean;
    cestXRay?: boolean;
    stepTest?: boolean;
    ecg?: boolean;
    hypotermalTest?: boolean;
    laboratryAnalysis?: boolean;
    psychotechnicalTests?: boolean;
    prescriptionRestrictions?: string;
    depthLimit?: number;
    releaseDate?: number;
    releasedBy?: string;
    signinDoctor?: string;
    overallJudgement?: string;
    doctor?: AnagRefDto;
    workerType?: string;
}

export interface WorkingEligibilityDto extends CertificateDto {
    anamnesticNotes?: string;
    clinicNotes?: string;
    diagnosticNotes?: string;
    workingActivity?: string;
    doctor: AnagRefDto;
}

export type CertificateType =
    | BoatLicenseDto
    | DeepSeaDiverDto
    | DriverLicenseDto
    | FirstInstanceMedicalCommissionDto
    | PortPilotDto
    | SeaPeopleDto
    | UnderwaterWorkerDto
    | WorkingEligibilityDto
    | DrinkingWaterBoxesDto
    | DrugsCertificateDto
    | DrugsDestructionDto
    | FoodBusinessDto
    | FreeHealthcarePracticeDto
    | MeansCertificateDto
    | SanitationExemptionDto
    | WeightCertificateDto;

export interface DossierDto {
    id?: number;
    version?: number;
    type: DossierTypeEnum | string;
    state: DossierStateEnum | number;
    dispatchDate?: number;
    updateDate?: number;
    closingDate?: number;
    operator?: AnagRefDto;
    entryProtocol?: string;
    exitProtocol?: string;
    emergencyProtocol?: string;
    emergencyProtocolDate?: number;
    assignedOfficeId?: number;
    duplicatesIdDossier?: number;
    replacesIdDossier?: number; //viene valorizzato nella nuova pratica (ovvero quella duplicata) con l'id del vecchio dossier
    replacedByIdDossier?: number; //viene valorizzato nella vecchia pratica (ovvero quella da cui si fa la duplicazione) con l'id della nuova pratica
    cancelingIdOperator?: string;
    cancelingDate?: number;
    cancelingReason?: string;
    createDate?: number;
    createUser?: string;
    updateUser?: string;
    allowChangePublicPortal?: boolean;
    tribute?: number;
    requestData?: VaccinationRequestDataDto | VisitRequestDataDto;
    //requestId?: number;
    subjects?: SubjectDto[];
    notes?: DossierNoteDto[];
    certificates?: CertificateType[] | TransportCertificate[];
    docIds?: string[];
    controls?: DossierControlsDto //! non presente su swagger
    // BFF ADD:
    typeLabel?: string;
    stateLabel?: string;
    signature?: boolean;
    signatureData?: ISignatureData
    operatorData?: PhysicalPersonDto; // onyl FE
    allowPublicControlsRates?: boolean;
    approval?: DossierApprovalDTO;
    delegatedOperator?: string; // Manca BE
    medicalOutcome?: MedicalOutcomeDto;

}

export interface ISignatureData {
    operator: string | undefined;
    operatorId: string | undefined;
    dateTime: number;
    state?: SignatureStateEnum;
    username?: string;
};

export interface DossierControlsDto { //! modello non presente su swagger
    documentalControls?: string;
    inspectiveControls?: string;
    analithicsControls?: string;
}

export interface LegalDoctorDossierDto extends DossierDto {
    // docIds?: string[];
    //performanceType?: string;
    performanceDate?: string;
    releaseDate?: string;
    reportPatient?: boolean;
    //unsuitability?: boolean;
}

export interface VaccinationDossierDto extends DossierDto {
    // docIds?: string[];
    performanceType?: PerformanceTypeEnum | string;
    performanceDate?: number;
    brand?: string;
    vaccinationRequest?: VaccinationRequestDto[]; //su swagger è VaccinationRequestDto[] ma funzionale(Antista Lorenzo) dice che prestazione è singola
    exemption?: ExemptionDto[];
}

export interface RequestDataDto {
    taskId?: number;
    requestType: DossierRequestTypeEnum | string; //su swagger è string
    performanceDate?: number;
    officeId?: number;
}

export interface VaccinationRequestDataDto extends RequestDataDto {
    antigen?: string;
    requestReason?: string | null;
    travelDestination?: string | null;
    travelReason?: string | null;
    travelReasonSpecification?: string | null;
    riskAreaStayDays?: number | null;
    notes?: string | null
}
export interface VisitRequestDataDto extends RequestDataDto {
    certificateType?: CertificateTypeEnum
}

// export interface medicalOutcomeDto  {
//     id?:number;
//     measure:string;
//     doctorInCharge:string;
//     measureDate?:string;
//     nonAdmissionReason:string;
//     printedNote?:string;
// }

export interface ClearanceDossierDto extends DossierDto {
    // docIds?: string[];
    destUsmafOfficeId?: number | null;
    officeOf?: number | null;
    customEntryOffice?: number | null;
    customEntryOfficeLabel?: string;
    shippingCode?: string;
    authorizationType?: AuthorizationTypeEnum;
    authorizationTypeLabel?: string,
    medicalOutcome?: MedicalOutcomeDto;
    destUsmafOfficeIdLabel?: string;
    officeOfLabel?: string;
    overallCheckOutcomes?: Record<string, string | null>
}
export interface MeansDossierDto extends DossierDto {
    meansOutcome: MeansOutcomeDto;
}
export interface MeansOutcomeDto extends DossierDto {
    measure?: string;
    measureLabel?: string;
    doctorInCharge?: string;
    doctorInChargeLabel?: string;
    measureDate?: string;
    printedNote?: string;
    outcomeType: OutComeTypeEnum;
    nonAdmissionReason?: string;
    requirements?: string;
    idDossier?: string;
    measureHour?: string;
}

export interface MeasureExtensionOutcomeDto {
    id?: number,
    measure?: string,
    doctorInCharge?: string,
    measureDate?: string,
    printedNote?: string,
    outcomeType: OutComeTypeEnum,
    nonAdmissionReason?: string,
    requirements?: string,
    idDossier?: number,
    certificateNumber?: number,
    releaseNation?: string,
    releaseAuthority?: string,
    expirationCertificateDate?: string,
    validityPeriodFrom?: string,
    validityPeriodTo?: string,
    annotation?: string,
}

export interface MedicalWasteDto {
    id?: number,
    measure?: string,
    doctorInCharge?: string,
    measureDate?: string,
    printedNote?: string,
    outcomeType: OutComeTypeEnum,
    nonAdmissionReason?: string,
    requirements?: string,
    idDossier?: number,
    endValidity?: string,
}
export interface BloodProductsDto extends ClearanceDossierDto {
    productDescription?: string;
    transportTemperature?: string;
    arrivalDate?: number;
    dateOfPassage?: number;
    destinantionCountryLabel?: string;
    destinationCountry?: string;
    destinationCountryLabel?: string;
    destinationInstitution?: AnagRefDto;
    doctor?: AnagRefDto;
    lotsNumber?: number;
    observations?: string;
    organDescription?: string;
    provenanceCountry?: string;
    provenanceCountryLabel?: string;
    provenanceInstitution?: AnagRefDto;
    doctorObservations?: string;
}

export interface HumanCellsDto extends ClearanceDossierDto {
    cellsType?: string;
    provenanceCountry?: string;
    provenanceCountryLabel?: string;
    destinationCountry?: string;
    destinationCountryLabel?: string;
    dateOfPassage?: number;
    doctor?: AnagRefDto;
    doctorObservations?: string;
    patientCode?: string;
    sec?: string;
    medicinalName?: string;
    requestType?: string;
    requestTypeLabel?: string;
    aicOrMeasure?: string;
    compliant?: boolean;
    companyOrSite?: string;
    denialReason?: string;
    provenanceInstitution?: AnagRefDto;
    destinationInstitution?: AnagRefDto;
    transportTemperature?: string;
    quantity?: number;
}

export interface RemainsDto extends ClearanceDossierDto {
    transportData?: TransportDataDto;
    embassyAuth?: EmbassyAuthorizationDto;
    countryAuth?: CountryAuthorizationDto;
    usmafPart?: UsmafPartDto;
}
export interface StuffDossierDto extends ClearanceDossierDto {
    destUsmafOfficeId?: number;
    destUsmafOfficeIdLabel?: string;
    customEntryOffice?: number;
    customEntryOfficeLabel?: string;
    personalUse?: boolean | null;
    shippingCode?: string;
    authorizationType?: AuthorizationTypeEnum;
    authorizationTypeLabel?: string,
    taricCodes?: TaricStuffDossierDto[];
    description?: string;
    goodsDestination?: number;
    goodsUsage?: string;
    devices?: DeviceDto[];
    netQuantity?: number;
    netMeasureUnit?: number;
    grossQuantity?: number;
    grossMeasureUnit?: number;
    provenanceCountry?: string;
    provenanceCountryLabel?: string;
    originCountry?: string;
    originCountryLabel?: string;
    departurePlace?: string;
    departureDate?: number;
    arrivalDate?: number;
    containerDescription?: string;
    containersNumber?: number;
    containerTypeId?: number;
    container?: ContainerDto[];
    quantity?: number;
    safekeepingPlace?: string;
    additionalInformation?: string;
    lot?: string;
    vehicle?: AnagRefDto;
    a3List?: A3Dto[];
    officeOf?: number;
    officeOfLabel?: string;
    medicalOutcome?: MedicalOutcomeDto;
    vehicleType?: string;
    vehicleIdentifier?: string;
    doctorAnagRef?: AnagRefDto;
    goodsDestinationLabel?: string;
    netMeasureUnitLabel?: string;
    grossMeasureUnitLabel?: string;
    departurePlaceLabel?: string;
    containerTypeIdLabel?: string;
    safekeepingPlaceLabel?: string;
    vehicleTypeLabel?: string;
}

export interface MedicalOutcomeDto {
    id?: number; // Required property (format: int64)
    measure?: string; // Optional property
    measureLabel?: string,
    doctorInCharge?: string; // Optional property
    measureDate?: string; // Optional property (format: date-time)
    nonAdmissionReason?: string; // Optional property
    printedNote?: string; // Optional property
    outcomeType?: OutComeTypeEnum
}

export interface TransplantOrgansDto extends ClearanceDossierDto, DossierDto {
    organDescription?: string;
    quantity?: number;
    provenanceCountry?: string;
    provenanceCountryLabel?: string;
    destinationCountry?: string;
    destinationCountryLabel?: string;
    provenanceInstitution?: AnagRefDto;
    destinationInstitution?: AnagRefDto;
    dateOfPassage?: number;
    observations?: string;
    doctor?: AnagRefDto;
    doctorObservations?: string;
    transportTemperature?: string;
    facilityToNotifyList?: FacilityToNotifyDto[];
}

export interface ShipCommissionDto extends DossierDto {
    meansOutcome?: MeansOutcomeDto;
    overallCheckOutcomes?: Record<string, string | null>
    usmafDestionation?: number;
    officeOf?: number;
    commissionType?: string;
    commissionTypeLabel?: string;
    stopoverRegion?: string;
    stopoverRegionLabel?: string;
    maritimeAuthority?: string;
    maritimeAuthorityLabel?: string;
    shipName?: string;
    shipRepresentativeEmail?: string;
    nationality?: string;
    nationalityLabel?: string;
    registrationCompartment?: string;
    shipRegistrationN?: string;
    commissionDate?: string;
    commissionPlace?: string;
    releaseDate?: string;
    notes?: DossierNoteDto[];
    docIds?: string[];
}

export interface DossierTypeBFF extends DossierDto {

}

export type DossierDTOType =
    | ClearanceDossierDto
    | BloodProductsDto
    | HumanCellsDto
    | LegalDoctorDossierDto
    | MeansDossierDto
    | MeansOutcomeDto
    | RemainsDto
    | StuffDossierDto
    | TransplantOrgansDto
    | VaccinationDossierDto
    | StuffDossierDto
    | ShipCommissionDto
    | TransportDossierDto

export interface BaseResponseObject extends IMDSBaseResponseModel<{}> { }

export interface BaseResponseVoid extends IMDSBaseResponseModel<DossierDTOType> { }

export interface BaseResponseDossierDto extends IMDSBaseResponseModel<DossierDTOType> { }

export interface DrugsDto {
    id: number;
    drugDescription: string;
    pharmaceuticalForm: string;
    pharmaceuticalFormLabel: string;
    dosage: string;
    dosageLabel: string;
    quantity: string;
    expirationDate: string;
};

export interface MaritimeHealthDecDataDto {
    sanitizationCertificate: boolean;
    sanitizationCertificateIssuePlace: string;
    sanitizationCertificateIssueDate: string;
    newInspectionRequest: boolean;
    omsTravelArea: boolean;
    crewMembersNumber: number;
    passengersNumber: number;
};

export interface HealtQuestionsDataDto {
    notAccidentDiedPeople: boolean | string;
    numberOfDeaths: number;
    infectiousDiseaseCases: boolean | string;
    sickPeopleGreatherThanExpected: boolean | string;
    numberOfSickPeople: number;
    sickPeopleCurrentlyOnBoard: boolean | string;
    wasDoctorConsulted: boolean | string;
    riskOfSpreadingInfectiousDiseases: boolean | string;
    healthMeasuresTaken: boolean | string;
    healthMeasureAdoptedType?: string;
    healthMeasureAdoptedTypeLabel?: string;
    healthMeasureAdoptedPlace?: string;
    healthMeasureAdoptedDate?: string;
    onBoardStowaways: boolean | string;
    stowawaysDeckingPlace?: string;
    onBoardAnimals: boolean | string;
    onBoardDoctor: boolean | string;
    onBoardDoctorSurname?: string;
    onBoardDoctorName?: string;
    captainSurname: string;
    captainName: string;
    maritimeHealthDeclarationDate: string;
    shipCommandEmail: string;
    confirmShipCommandEmail: string;
};

export interface PortOfCallDto {
    id?: number;
    stopover: string;
    departureDay: string;
};

export interface MaritimeHealthDecAttchDto {
    id?: number;
    name?: string;
    surname?: string;
    qualification?: string;
    age?: number;
    nation?: string;
    sex?: string;
    embarkationPort?: string;
    naturOfDisease?: string;
    embarkationDate?: string;
    onsetSymptomsDate?: string;
    reportedToPortMedicalOfficer?: string;
    caseManagement?: string;
    therapiesAdministered?: string;
};
export interface MeansCertificateDto extends CertificateDto {
    usmafDestination: number;
    usmafDestinationLabel?: string;
    officeOf: number;
    officeOfLabel?: number | string;
    stopoverRegion: string;
    stopoverRegionLabel?: string;
    maritimeAuthority: string;
    maritimeAuthorityLabel?: string;
    estimatedDepartureDaytime: string;
    estimatedDepartureDate?: string;
    additionalNotes: string;
    usmafDestionation?: number;
    usmafDestionationLabel?: number;
}

export interface DrinkingWaterBoxesDto extends MeansCertificateDto {
    lastCleaningDate: string;
    legionellaAnalysis: boolean;
    legionellaAnalysisDate?: string;
    potabilityAnalysis: boolean;
    potabilityAnalysisDate?: string;
}

export interface DrugsCertificateDto extends MeansCertificateDto {
    medicineTableType?: string;
    medicineTableTypeLabel?: string;
    reinstatementConsent?: boolean;
    responsibleDoctor?: number | string;
    inspectorName?: number | string;
    note?: string;
}

export interface DrugsDestructionDto extends MeansCertificateDto {
    drugsList: DrugsDto[];
}

export interface FoodBusinessDto extends MeansCertificateDto {
    activity?: string[];
    topographicPremisesLocation?: string;
    premisesSurfaceArea?: number;
    waterSupplyMethod?: string;
    liquidWasteDisposalMethod?: string;
    solidWasteDisposalMethod?: string;
    foodEquipment?: string;
    haccpSelfCheck?: string;
}


export interface FreeHealthcarePracticeDto extends MeansCertificateDto {
    certificateType: CertificateTypeEnum; // add enum if applicable
    practitionerName: string;
    qualification: string;
    registrationNumber: string;
    practiceAddress: string;
    provenancePort?: string;
    provenancePortDepDay?: string;
    lastStopoverPort?: string;
    estimatedArrivalDayTime?: string;
    estimatedArrivalDate?: string;
    usmafControlFollowingPort?: string;
    maritimeHealthDecData?: MaritimeHealthDecDataDto;
    healtQuestionsData?: HealtQuestionsDataDto;
    portOfCallList: PortOfCallDto[];
    maritimeHealthDeclarationAttachmentList?: MaritimeHealthDecAttchDto[];
}
export interface SanitationExemptionDto extends MeansCertificateDto {
    cargoTonnage?: string;
    nationality?: string;
    nationalityLabel?: string;
    grossTonnageLabel?: string;
    dispositionDate?: number;
    documentReleaseDoctor?: number | string;
    questionnaire?: QuestionnaireDto;
    note?: string;
}

export interface WeightCertificateDto extends MeansCertificateDto {
    grossTonnage?: string;
    disinsectionDispositionDate?: number;
    disinsectionReleaseDoctor?: number | string;
    verbalDisinsectionDate?: number;
    executiveCompany?: string;
    note?: string;
}

export interface QuestionnaireDto {
    boatSanitationCertificate: BoatSanitationCertificateDto[];
    boatSanitationExemptionCertificate: BoatSanitationExemptionCertificateDto[];
    boatSanitationAttachment: BoatSanitationAttachmentDto[];
    note?: string
}

export interface BoatSanitationCertificateDto {
    id?: number;
    certificateId?: number;
    type?: SanitationTypeEnum;
    controlMeasureApplied?: string;
    newInspectionDate?: number | string // Check be;
    conditionComments?: string;
}

export interface BoatSanitationExemptionCertificateDto {
    id?: number;
    certificateId?: number;
    type?: SanitationTypeEnum;
    evidenceDetected?: string;
    sampleResults?: string;
    verifiedDocuments?: string;
}

export interface BoatSanitationAttachmentDto {
    id?: number;
    certificateId?: number;
    type?: SanitationTypeEnum;
    evidenceDetected?: string;
    sampleResults?: string;
    verifiedDocuments?: string;
    controlMeasureApplied?: string;
    newInspectionDate?: number | string;
    conditionComments?: string;
}

export type TransportCertificate =
    WeightCertificateDto //!Vigilanza/esenzione disinsettazione, Autorizzazione al trasporto merci o rifiuti di interesse sanitario
    & SanitationExemptionDto //! Vigilanza/esenzione sanificatzione
    & FreeHealthcarePracticeDto //!Libera pratica sanitaria
    & FoodBusinessDto //!Notifica sanitaria per attività alimentare
    & DrugsDestructionDto //!Distruzione farmaci a bordo
    & DrinkingWaterBoxesDto //!Casse acqua potabile
    & DrugsCertificateDto //!Vidimazione annuale registro stupefacenti, Rilascio registri stupefacenti, Cassetta mediciali e farmacia di bordo
    & MeansCertificateDto; //!Reintegro stupefacenti con ricetta allegata

export interface TransportDossierDto extends DossierDto {
    meansOutcome?: MeansOutcomeDto | MeasureExtensionOutcomeDto;
    overallCheckOutcomes?: Record<string, string | null>;
    vehicle?: AnagRefDto;
    shipStopoverRegion?: string;
    shipStopoverRegionLabel?: string;
    shipMaritimeAuthority?: string;
    shipMaritimeAuthorityLabel?: string;
    transportType?: string;
    transportTypeLabel?: string;
    prescriptions?: string;
    flightId?: string;
}

export interface DossierSendRequest {
    dossierIds: number[];
}

export interface DossierApprovalDTO {
    approvalDate: number | string;
    isApproved: boolean;
}

export interface BaseResponseBigDecimal extends IMDSBaseResponseModel<number> { }
export interface BaseResponseString extends IMDSBaseResponseModel<string> { }
