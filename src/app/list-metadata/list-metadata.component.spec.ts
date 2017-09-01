import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMetadataComponent } from './list-metadata.component';

describe('ListMetadataComponent', () => {
  let component: ListMetadataComponent;
  let fixture: ComponentFixture<ListMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
