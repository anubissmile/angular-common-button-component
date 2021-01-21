import { CommonButtonInterface, CommonButtonThemeEnum, CommonButtonTypeEnum } from './common-button.interface';

export class CommonButtonModel implements CommonButtonInterface {
  index?: number;
  isDisable = false;
  name = 'N/A';
  type = CommonButtonTypeEnum.COMMON;
  theme = CommonButtonThemeEnum.PRIMARY;

  constructor(name = 'N/A', index = 0, type = CommonButtonTypeEnum.COMMON, theme = CommonButtonThemeEnum.PRIMARY, isDisable = false) {
    this.name = name;
    this.index = index;
    this.isDisable = isDisable;
    this.type = type;
    this.theme = theme;
  }
}

export class CommonButtonFactory {

  public static getDefault(): CommonButtonModel {
    return new CommonButtonModel();
  }

  public static getObject(name: string, index: number, type = CommonButtonTypeEnum.COMMON, theme = CommonButtonThemeEnum.PRIMARY, isDisable = false): CommonButtonModel {
    return new CommonButtonModel(name, index, type, theme, isDisable);
  }

  public static getObjects(names: string[]): CommonButtonModel[] {
    if (!names) { return []; }
    const buttons: CommonButtonModel[] = [];
    names.forEach((buttonName, index) => {
      buttons.push(new CommonButtonModel(buttonName, index));
      if ((index + 1) === names.length) {
        return buttons;
      }
    });
  }

  public static getObjectsYesNo(): CommonButtonModel[] {
    return [
      new CommonButtonModel('No', 0),
      new CommonButtonModel('Yes', 1)
    ];
  }

  public static getObjectsNextBack(): CommonButtonModel[] {
    return [
      new CommonButtonModel('Back', 0),
      new CommonButtonModel('Next', 1)
    ];
  }

}
