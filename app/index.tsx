import './components/global.css';
import { render as reactDomRender } from 'react-dom';
import { Page } from './components/Page';
import { getMountElement } from './utils/getMountElement';
import { StoreProvider } from './providers/StoreProvider';

(() => {
  const app = getMountElement();
  reactDomRender(
    <StoreProvider>
      <Page />
    </StoreProvider>,
    app
  );
})();
