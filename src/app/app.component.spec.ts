import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  beforeEach(async () => {
    console.log("Calling beforeeach");
    await TestBed.configureTestingModule({
      
      imports: [
        RouterTestingModule,
        AuthModule.forRoot({
          ...env.auth,
          httpInterceptor: {
            allowedList: [
              `${env.dev.serverUrl}/lists`,
            `${env.dev.serverUrl}/lists/:listId`,
            
            
          ],
            
          },
        })


      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    console.log("Calling first test");
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  xit("H1 tag should be App Component", () => {
    const fixture = TestBed.createComponent(AppComponent);
    var h2: HTMLElement = fixture.nativeElement.querySelector("h2");
    const app = fixture.componentInstance;
    fixture.detectChanges;
    expect(h2.textContent).toEqual("App Component")});

  it(`should have as title 'auth0'`, () => {
    console.log("calling second test");
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('auth0');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('auth0 app is running!');
  });
});
