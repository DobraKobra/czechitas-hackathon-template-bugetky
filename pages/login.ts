import { Locator, Page, expect } from "@playwright/test";

export class Login {
  readonly page: Page;
  readonly email: Locator;


  // Lokatory - promenne pro elementy na strance
  // Seznam veci, ktere na strance muzu najit a s kterymi budu pracovat
  // Vsimni si, ze tu promennou muzes pojmenovat jak chces - treba necoNeco. 
  // To nedava ale smysl, protoze nevis pak v testu co to je. Takze to chce neco jako button, input, header, etc. S nejakym lepsim popisem.

  
  

  readonly EmailField: Locator;
  readonly PasswordField: Locator;
  readonly SignInButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // A ted naplnime lokatory - najdeme si elementy na strance
    this.EmailField = page.locator("email");
    this.PasswordField = page.getByText('Password');
    this.SignInButton = page.locator('#SubmitLogin');
  }
}
