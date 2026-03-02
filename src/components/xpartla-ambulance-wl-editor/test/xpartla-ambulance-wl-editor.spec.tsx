import { newSpecPage } from '@stencil/core/testing';
import { XpartlaAmbulanceWlEditor } from '../xpartla-ambulance-wl-editor';

describe('xpartla-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XpartlaAmbulanceWlEditor],
      html: `<xpartla-ambulance-wl-editor></xpartla-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <xpartla-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xpartla-ambulance-wl-editor>
    `);
  });
});
