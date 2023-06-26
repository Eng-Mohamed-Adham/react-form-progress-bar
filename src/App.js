import SignUp from "./components/SignUp1";
import { FormProvider } from './context/FormContext';
import ProgressBar from './components/ProgressBar';
import Form from './components/Form';


function App() {

  return (
    <FormProvider>
      
    <ProgressBar />
    <Form />

    {/* <LoginPage /> */}
</FormProvider>

  )

}

export default App;
