import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';
import { useStore } from '../hooks/useStore';
import { FormDialog } from './FormDialog';
import { SuccessDialog } from './SuccessDialog';

export const Page = () => {
  const { stage } = useStore();
  return (
    <>
      <Header />
      <Main />
      <Footer />
      {stage === 'form' && <FormDialog />}
      {stage === 'success' && <SuccessDialog />}
    </>
  );
};
