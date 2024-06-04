import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageObsComponent } from './page-obs.component';

describe('PageObsComponent', () => {
  let component: PageObsComponent;
  let fixture: ComponentFixture<PageObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageObsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
