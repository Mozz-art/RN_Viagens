import Routes from './src/routes/index'
import * as S from './global-styles';
import { Provider } from 'react-redux';
import store from './src/database/store';
//Integrantes: Bruno Corona, Gabriel Monteiro, Raphaella Abreu

export default function App() {
  return (
    <Provider store={store}>
    <S.Container>
      <Routes></Routes>
    </S.Container>
    </Provider>
  );
}

