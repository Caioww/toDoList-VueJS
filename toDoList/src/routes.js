import Cadastro from './Cadastro';
import Lista from './shared/Lista';

export const routes = [
    { path: '', component: Cadastro, titulo: 'Cadastro'},
    { path: '/lista', component: Lista, titulo: 'Lista'}
];