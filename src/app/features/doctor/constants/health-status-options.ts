export interface HealthStatusOption {
  value: string;
  label: string;
}

export const HEALTH_STATUS_OPTIONS: HealthStatusOption[] = [
  { value: 'سليم', label: 'سليم' },
  { value: 'غير سليم', label: 'غير سليم' },
  { value: 'غير ذلك', label: 'غير ذلك' }
];

export const HEALTH_STATUS_VALUES = HEALTH_STATUS_OPTIONS.map(option => option.value);

export const OTHER_OPTION_VALUE = 'غير ذلك';

export function normalizeHealthStatus(value: string | null | undefined): {
  status: string;
  other: string;
} {
  if (!value || HEALTH_STATUS_VALUES.includes(value)) {
    return { status: value || 'سليم', other: '' };
  }

  return { status: OTHER_OPTION_VALUE, other: value };
}

export function resolveHealthStatusValue(status: string, other: string | null | undefined): string {
  if (status === OTHER_OPTION_VALUE) {
    const trimmedOther = (other || '').trim();
    return trimmedOther || OTHER_OPTION_VALUE;
  }

  return status;
}


