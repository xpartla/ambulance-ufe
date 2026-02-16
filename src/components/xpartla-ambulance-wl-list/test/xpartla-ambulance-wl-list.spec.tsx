import { newSpecPage } from '@stencil/core/testing';
import { XpartlaAmbulanceWlList } from '../xpartla-ambulance-wl-list';

describe('xpartla-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XpartlaAmbulanceWlList],
      html: `<xpartla-ambulance-wl-list></xpartla-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XpartlaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
