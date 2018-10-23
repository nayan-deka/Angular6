//Vanilla testing
import {AppComponent} from './app.component';
describe('Component: App', () => {
// Test Suite : collection of tests
  let component: AppComponent;

  beforeEach(() => {   
    component = new AppComponent();
  });

  afterEach(() => { 
      component = null;
  });
  //test code
  it('Component should return Welcome with title', () => {    
    expect(component.title).toEqual('myapp');
  });
});
