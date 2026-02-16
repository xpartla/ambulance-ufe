import { newSpecPage } from '@stencil/core/testing';
import { XpartlaAmbulanceWlList } from '../xpartla-ambulance-wl-list';

describe('xpartla-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XpartlaAmbulanceWlList],
      html: `<xpartla-ambulance-wl-list></xpartla-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xpartla-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xpartla-ambulance-wl-list>
    `);
  });
});
