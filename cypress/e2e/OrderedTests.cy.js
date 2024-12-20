import { testDemo } from './TestDemo.cy';
import { login } from './Login.cy';
import { registration } from './Registration.cy';
import { reRegistration } from './Re-registration.cy';
import { dynamicDropdown } from './DynamicDropDown.cy';

describe('Execute Tests in Order', () => {
  testDemo();
  login();
  registration();
  reRegistration();
  dynamicDropdown();
});
