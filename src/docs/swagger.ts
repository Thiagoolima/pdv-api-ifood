import { definition } from './configs/definition';
import { servers } from './configs/servers';
import { pathUser } from './paths/usuario';
import { pathLogin } from './paths/login';
import { pathCategoria } from './paths/categoria';
import { schemaSecurity } from './schemas/security';
import { pathCliente } from './paths/cliente';
import { pathProduto } from './paths/produto';


export const swagger = {
    ...definition,
    ...servers,
    paths: {
        ...pathUser,
        ...pathLogin,
        ...pathCategoria,
        ...pathCliente,
        ...pathProduto
    },
    components: {
        ...schemaSecurity
    }
};