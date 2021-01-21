import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../modules/shared.module';
import { CommonButtonComponent } from './common-button.component';
import { CommonButtonFactory, CommonButtonModel } from './shared/common-button.factory';
import { CommonButtonThemeEnum } from './shared/common-button.interface';

describe('Verify CommonButtonComponent could be...', () => {

  let component: CommonButtonComponent;
  let fixture: ComponentFixture<CommonButtonComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        CommonButtonComponent
      ]
    }).compileComponents();

  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(CommonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('CommonButtonComponent should initialize properly.', () => {
    expect(component).toBeTruthy();
  });

  describe('Verify onButtonClick() could be...', () => {

    it('onButtonClick() should not running when argument is null.', () => {
      const spy = spyOn<any>(component.clickEmitter, `emit`).and.callThrough();
      component.onButtonClick(null);
      expect(spy).not.toHaveBeenCalled();
    });

    it('onButtonClick() should run emit properly.', () => {
      const spy = spyOn<any>(component.clickEmitter, `emit`).and.callThrough();
      component.onButtonClick(CommonButtonFactory.getDefault());
      expect(spy).toHaveBeenCalled();
    });

  });

  describe('Verify configureButtonTheme could be...', () => {

    it('configureButtonTheme() should return \'bg-pink\' when argument is null', () => {
      expect(component.configureButtonTheme(null)).toEqual('bg-pink');
    });

    it('configureButtonTheme() should return \'bg-pink\' when argument is otherwise', () => {
      expect(component.configureButtonTheme(new CommonButtonModel())).toEqual('bg-pink');
    });

    it('configureButtonTheme() should return \'bg-pink\' when argument is \'PRIMARY\'', () => {
      const button: CommonButtonModel = CommonButtonFactory.getDefault();
      button.theme = CommonButtonThemeEnum.PRIMARY;
      expect(component.configureButtonTheme(button)).toEqual('bg-pink');
    });

    it('configureButtonTheme() should return \'bg-pink-secondary\' when argument is \'SECONDARY\'', () => {
      const button: CommonButtonModel = CommonButtonFactory.getDefault();
      button.theme = CommonButtonThemeEnum.SECONDARY;
      expect(component.configureButtonTheme(button)).toEqual('bg-pink-secondary');
    });

    it('configureButtonTheme() should return \'bg-pink-warning\' when argument is \'WARNING\'', () => {
      const button: CommonButtonModel = CommonButtonFactory.getDefault();
      button.theme = CommonButtonThemeEnum.WARNING;
      expect(component.configureButtonTheme(button)).toEqual('bg-pink-warning');
    });

    it('configureButtonTheme() should return \'bg-pink-danger\' when argument is \'DANGER\'', () => {
      const button: CommonButtonModel = CommonButtonFactory.getDefault();
      button.theme = CommonButtonThemeEnum.DANGER;
      expect(component.configureButtonTheme(button)).toEqual('bg-pink-danger');
    });

  });

});
