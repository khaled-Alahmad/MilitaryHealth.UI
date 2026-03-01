// src/app/features/doctor/constants/health-status-options.ts
var HEALTH_STATUS_OPTIONS = [
  { value: "\u0633\u0644\u064A\u0645", label: "\u0633\u0644\u064A\u0645" },
  { value: "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645", label: "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645" },
  { value: "\u063A\u064A\u0631 \u0630\u0644\u0643", label: "\u063A\u064A\u0631 \u0630\u0644\u0643" }
];
var HEALTH_STATUS_VALUES = HEALTH_STATUS_OPTIONS.map((option) => option.value);
var OTHER_OPTION_VALUE = "\u063A\u064A\u0631 \u0630\u0644\u0643";
function normalizeHealthStatus(value) {
  if (!value || HEALTH_STATUS_VALUES.includes(value)) {
    return { status: value || "\u0633\u0644\u064A\u0645", other: "" };
  }
  return { status: OTHER_OPTION_VALUE, other: value };
}
function resolveHealthStatusValue(status, other) {
  if (status === OTHER_OPTION_VALUE) {
    const trimmedOther = (other || "").trim();
    return trimmedOther || OTHER_OPTION_VALUE;
  }
  return status;
}

export {
  HEALTH_STATUS_OPTIONS,
  HEALTH_STATUS_VALUES,
  OTHER_OPTION_VALUE,
  normalizeHealthStatus,
  resolveHealthStatusValue
};
//# sourceMappingURL=chunk-7R7W7ON6.js.map
