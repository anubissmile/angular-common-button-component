export interface CommonButtonInterface {
  index?: number;
  isDisable: boolean;
  name: string;
  type: CommonButtonTypeEnum;
  theme: CommonButtonThemeEnum;
}

export enum CommonButtonTypeEnum {
  COMMON = 'common',
  START_ICON = 'start_icon',
  END_ICON = 'end_icon'
}

export enum CommonButtonThemeEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  DANGER = 'danger',
}
