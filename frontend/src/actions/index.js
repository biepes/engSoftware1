/**
 * Definição de Eventos para mudança de estado.
 */
export const TYPE = {
    ALTERAR_USUARIO: 'ALTERAR_USUARIO',
    SET_IS_AUTHENTICATED: 'SET_IS_AUTHENTICATED',
};

export const setIsAuthenticated = (isAuthenticated) => ({
    type: TYPE.SET_IS_AUTHENTICATED,
    text: isAuthenticated,
});