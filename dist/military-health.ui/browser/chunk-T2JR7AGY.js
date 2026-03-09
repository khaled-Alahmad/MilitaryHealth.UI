import {
  AuthService
} from "./chunk-GQ7KH2M7.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  forkJoin,
  map,
  of,
  setClassMetadata,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/services/eye-exam.service.ts
var EyeExamService = class _EyeExamService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/api/EyeExams`;
  consultationUrl = `${environment.apiUrl}/api/Consultations`;
  uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  refractionUrl = `${environment.apiUrl}/api/Refractions`;
  refractionTypesUrl = `${environment.apiUrl}/api/RefractionTypes`;
  resultsUrl = `${environment.apiUrl}/api/Results`;
  investigationUrl = `${environment.apiUrl}/api/Investigations`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }
  // Helper Methods
  organizeRefractions(refractions) {
    const organized = {
      rightEye: {
        myopia: void 0,
        hyperopia: void 0,
        astigmatism: void 0
      },
      leftEye: {
        myopia: void 0,
        hyperopia: void 0,
        astigmatism: void 0
      },
      hasRefractions: false
    };
    if (!refractions?.length) {
      return organized;
    }
    organized.hasRefractions = true;
    refractions.forEach((refraction) => {
      const eye = refraction.isLeft ? organized.leftEye : organized.rightEye;
      if (refraction.refractionType) {
        const description = refraction.refractionType.description.toLowerCase();
        if (description.includes("\u0642\u0635\u0631") || description.includes("myopia")) {
          eye.myopia = refraction.refractionValue;
        } else if (description.includes("\u0637\u0648\u0644") || description.includes("hyperopia")) {
          eye.hyperopia = refraction.refractionValue;
        } else if (description.includes("\u0627\u0633\u062A\u062C\u0645\u0627\u062A\u064A\u0632\u0645") || description.includes("astigmatism")) {
          eye.astigmatism = refraction.refractionValue;
        }
      } else {
        switch (refraction.refractionTypeID) {
          case 1:
            eye.myopia = refraction.refractionValue;
            break;
          case 2:
            eye.hyperopia = refraction.refractionValue;
            break;
          case 3:
            eye.astigmatism = refraction.refractionValue;
            break;
        }
      }
    });
    return organized;
  }
  // Eye Exam CRUD Operations
  createEyeExam(eyeExam) {
    if (!eyeExam) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0645\u0637\u0644\u0648\u0628\u0629",
        data: {},
        traceId: ""
      });
    }
    return this.http.post(this.apiUrl, eyeExam, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => {
      return of({
        succeeded: false,
        status: error.status || 500,
        message: error.error?.message || error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0641\u062D\u0635",
        data: {},
        traceId: error.error?.traceId || ""
      });
    }));
  }
  updateEyeExam(id, eyeExam) {
    if (!id || !eyeExam) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0644\u0648\u0628\u0629",
        data: {},
        traceId: ""
      });
    }
    return this.http.put(`${this.apiUrl}/${id}`, eyeExam, {
      headers: this.getAuthHeaders()
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635",
      data: {},
      traceId: ""
    })));
  }
  getEyeExamById(id) {
    if (!id) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u062D\u0635 \u0645\u0637\u0644\u0648\u0628",
        data: {},
        traceId: ""
      });
    }
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0627\u0644\u0641\u062D\u0635",
      data: {},
      traceId: ""
    })));
  }
  getAllEyeExams(page = 1, pageSize = 20, filter = "") {
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortBy", "applicantFileNumber").set("sortDesc", "true");
    if (filter) {
      params = params.set("filter", filter);
    }
    return this.http.get(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => res.data), catchError(() => of({
      items: [],
      totalCount: 0,
      pageNumber: page,
      pageSize,
      totalPages: 0
    })));
  }
  getByFileNumber(fileNumber) {
    if (!fileNumber) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0645\u0637\u0644\u0648\u0628",
        data: null,
        traceId: ""
      });
    }
    const url = `${this.apiUrl}?sortDesc=false&page=1&pageSize=1000`;
    return this.http.get(url, {
      headers: this.getAuthHeaders()
    }).pipe(map((response) => {
      if (!response.succeeded || !response.data) {
        return {
          succeeded: false,
          status: response.status || 500,
          message: response.message || "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A",
          data: null,
          traceId: response.traceId || ""
        };
      }
      const items = response.data.items || [];
      const exam = items.find((e) => e.applicantFileNumber === fileNumber);
      if (exam && exam.eyeExamID) {
        return {
          succeeded: true,
          status: 200,
          message: "\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0641\u062D\u0635",
          data: exam,
          traceId: response.traceId || ""
        };
      } else {
        return {
          succeeded: false,
          status: 404,
          message: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0641\u062D\u0635 \u0639\u064A\u0646\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628",
          data: null,
          traceId: response.traceId || ""
        };
      }
    }), catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0627\u0644\u0641\u062D\u0635",
      data: null,
      traceId: ""
    })));
  }
  getByFileNumber1(fileNumber) {
    const url = `${this.apiUrl}?sortDesc=false&page=1&pageSize=1000`;
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((res) => {
      const items = res.data?.items || [];
      const exam = items.find((e) => e.applicantFileNumber === fileNumber && e.doctor?.specializationID === 1);
      return exam || null;
    }), catchError(() => of(null)));
  }
  // Detailed Eye Exam Operations
  getDetailedEyeExamByFileNumber(fileNumber) {
    if (!fileNumber) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0645\u0637\u0644\u0648\u0628",
        data: null,
        traceId: ""
      });
    }
    return this.getByFileNumber(fileNumber).pipe(switchMap((response) => {
      if (!response.succeeded || !response.data) {
        return of(response);
      }
      const eyeExam = response.data;
      return forkJoin({
        refractions: this.getRefractionsByEyeExamId(eyeExam.eyeExamID),
        types: this.getRefractionTypes()
      }).pipe(map(({ refractions, types }) => {
        if (!refractions.succeeded) {
          return __spreadProps(__spreadValues({}, response), {
            succeeded: false,
            status: refractions.status,
            message: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A",
            data: null
          });
        }
        const refractionsWithTypes = refractions.data.map((refraction) => __spreadProps(__spreadValues({}, refraction), {
          refractionType: types.data.items?.find((type) => type.refractionTypeID === refraction.refractionTypeID)
        }));
        const organizedRefractions = this.organizeRefractions(refractionsWithTypes);
        const detailedExam = __spreadProps(__spreadValues({}, eyeExam), {
          organizedRefractions
        });
        return {
          succeeded: true,
          status: 200,
          message: "\u062A\u0645 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A \u0628\u0646\u062C\u0627\u062D",
          data: detailedExam,
          traceId: response.traceId
        };
      }), catchError((error) => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639",
        data: null,
        traceId: ""
      })));
    }));
  }
  // Refraction Operations
  addRefraction(refraction) {
    if (!refraction || !refraction.eyeExamID) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 \u0648\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u062D\u0635 \u0645\u0637\u0644\u0648\u0628\u0629",
        data: {},
        traceId: ""
      });
    }
    return this.http.post(this.refractionUrl, refraction, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631",
      data: {},
      traceId: ""
    })));
  }
  deleteRefraction(refractionId) {
    if (!refractionId) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 \u0645\u0637\u0644\u0648\u0628",
        data: void 0,
        traceId: ""
      });
    }
    return this.http.delete(`${this.refractionUrl}/${refractionId}`, {
      headers: this.getAuthHeaders()
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062D\u0630\u0641 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631",
      data: void 0,
      traceId: ""
    })));
  }
  updateRefraction(refractionId, refraction) {
    if (!refractionId || !refraction) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0644\u0648\u0628\u0629",
        data: {},
        traceId: ""
      });
    }
    return this.http.put(`${this.refractionUrl}/${refractionId}`, refraction, {
      headers: this.getAuthHeaders()
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631",
      data: {},
      traceId: ""
    })));
  }
  getRefractionsByEyeExamId(eyeExamId) {
    if (!eyeExamId) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u062D\u0635 \u0645\u0637\u0644\u0648\u0628",
        data: [],
        traceId: ""
      });
    }
    const params = new HttpParams().set("filter", `eyeExamId=${eyeExamId}`).set("page", "1").set("pageSize", "100");
    return this.http.get(this.refractionUrl, { headers: this.getAuthHeaders(), params }).pipe(map((response) => __spreadProps(__spreadValues({}, response), {
      data: response.data?.items || []
    })), catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A",
      data: [],
      traceId: ""
    })));
  }
  getRefractionsByApplicantId(applicantId) {
    if (!applicantId) {
      return of([]);
    }
    return this.getEyeExamsByApplicantId(applicantId).pipe(switchMap((exams) => {
      if (!exams.length) {
        return of([]);
      }
      const refractionCalls = exams.map((exam) => this.getRefractionsByEyeExamId(exam.eyeExamID).pipe(map((response) => response.data)));
      return forkJoin(refractionCalls).pipe(map((refractionArrays) => refractionArrays.flat()), catchError(() => of([])));
    }), catchError(() => of([])));
  }
  getEyeExamsByApplicantId(applicantId) {
    if (!applicantId) {
      return of([]);
    }
    const params = new HttpParams().set("filter", `applicantId=${applicantId}`).set("page", "1").set("pageSize", "1000").set("sortDesc", "true");
    return this.http.get(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => res.data?.items || []), catchError(() => of([])));
  }
  getRefractionTypes() {
    return this.http.get(this.refractionTypesUrl, { headers: this.getAuthHeaders() }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A",
      data: {
        items: [],
        pageNumber: 1,
        pageSize: 0,
        totalCount: 0,
        totalPages: 0
      },
      traceId: ""
    })));
  }
  // Results Operations
  getResults() {
    return this.http.get(this.resultsUrl, {
      headers: this.getAuthHeaders()
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0627\u0644\u0646\u062A\u0627\u0626\u062C",
      data: null,
      traceId: ""
    })));
  }
  // File Operations
  uploadFile(file) {
    if (!file) {
      return of("");
    }
    const formData = new FormData();
    formData.append("File", file);
    return this.http.post(this.uploadUrl, formData, {
      headers: this.getAuthHeaders()
    }).pipe(map((res) => res.path || ""), catchError(() => of("")));
  }
  // Consultation Operations
  addConsultation(consultation) {
    if (!consultation) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u0637\u0644\u0648\u0628\u0629",
        data: {},
        traceId: ""
      });
    }
    return this.http.post(this.consultationUrl, consultation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629",
      data: {},
      traceId: ""
    })));
  }
  getEyeClinicConsultations(page = 1, pageSize = 20, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortBy", "consultationID").set("sortDesc", "true");
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => {
      const data = res.data ?? {
        items: [],
        totalCount: 0,
        page,
        pageSize,
        totalPages: 0
      };
      if (data.items && data.items.length > 0) {
        data.items = data.items.sort((a, b) => {
          const idA = a.consultationID || 0;
          const idB = b.consultationID || 0;
          return idB - idA;
        });
      }
      return data;
    }), catchError(() => of({
      items: [],
      totalCount: 0,
      pageNumber: page,
      pageSize,
      totalPages: 0
    })));
  }
  updateConsultation(id, consultation) {
    if (!id || !consultation) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0644\u0648\u0628\u0629",
        data: {},
        traceId: ""
      });
    }
    return this.http.put(`${this.consultationUrl}/${id}`, consultation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629",
      data: {},
      traceId: ""
    })));
  }
  // // Investigation Operations
  // getEyeClinicInvestigations(
  //   page: number = 1,
  //   pageSize: number = 20,
  //   filter: string = ''
  // ): Observable<PagedResponse<Investigation>> {
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortDesc', 'true');
  //   if (filter) {
  //     params = params.set('filter', filter);
  //   }
  //   return this.http.get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, {
  //     headers: this.getAuthHeaders(),
  //     params
  //   }).pipe(
  //     map(res => res.data),
  //     catchError(() => of({
  //       items: [],
  //       totalCount: 0,
  //       pageNumber: page,
  //       pageSize: pageSize,
  //       totalPages: 0
  //     }))
  //   );
  // }
  // Investigation Operations
  getEyeClinicInvestigations(page = 1, pageSize = 20, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", "true");
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.investigationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => res.data ?? {
      items: [],
      totalCount: 0,
      page,
      pageSize,
      totalPages: 0
    }), catchError(() => of({
      items: [],
      totalCount: 0,
      pageNumber: page,
      pageSize,
      totalPages: 0
    })));
  }
  addInvestigation(investigation) {
    if (!investigation) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0645\u0637\u0644\u0648\u0628\u0629",
        data: {},
        traceId: ""
      });
    }
    return this.http.post(this.investigationUrl, investigation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635",
      data: {},
      traceId: ""
    })));
  }
  updateInvestigation(id, investigation) {
    if (!id || !investigation) {
      return of({
        succeeded: false,
        status: 400,
        message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0644\u0648\u0628\u0629",
        data: {},
        traceId: ""
      });
    }
    return this.http.put(`${this.investigationUrl}/${id}`, investigation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => of({
      succeeded: false,
      status: error.status || 500,
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635",
      data: {},
      traceId: ""
    })));
  }
  static \u0275fac = function EyeExamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EyeExamService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EyeExamService, factory: _EyeExamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeExamService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  EyeExamService
};
//# sourceMappingURL=chunk-T2JR7AGY.js.map
