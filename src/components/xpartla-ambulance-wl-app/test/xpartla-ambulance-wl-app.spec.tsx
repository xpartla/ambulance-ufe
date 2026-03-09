import { newSpecPage } from '@stencil/core/testing';
import { XpartlaAmbulanceWlApp } from '../xpartla-ambulance-wl-app';

  describe('xpartla-ambulance-wl-app', () => {

    it('renders editor', async () => {
      const page = await newSpecPage({
        url: `http://localhost/entry/@new`,
        components: [XpartlaAmbulanceWlApp],
          html: `<xpartla-ambulance-wl-app base-path="/"></xpartla-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xpartla-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
        components: [XpartlaAmbulanceWlApp],
          html: `<xpartla-ambulance-wl-app base-path="/ambulance-wl/"></xpartla-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xpartla-ambulance-wl-list");
  });
});
