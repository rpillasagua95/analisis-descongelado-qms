// Datos FICTICIOS de demostracion: codigos y clientes inventados.
// Códigos que requieren Peso Congelado (estructura antigua - compatibilidad)
const CLIENTES_CON_PESO_CONGELADO: Record<string, string> = {
    'D0001': 'CLIENTE DEMO A',
    'D0002': 'CLIENTE DEMO B',
};

// Códigos que requieren campos de Peso Glaseo y Peso sin Glaseo
const CLIENTES_CON_PESO_GLASEO: Record<string, string> = {
    'D0003': 'CLIENTE DEMO C',
};

// Códigos que NUNCA muestran Peso Congelado
const CLIENTES_SIN_PESO_CONGELADO: Record<string, string> = {
    'D0004': 'CLIENTE DEMO D',
};

/**
 * Obtained information about a cliente by código
 * @param codigo Código del cliente
 * @returns Información del cliente incluyendo si debe mostrar peso congelado y glaseo
 */
function getClientInfo(codigo: string): { nombre: string; mostrarPesoCongelado: boolean; requierePesoGlaseo: boolean } | null {
    // Verificar si el cliente está en la lista CON peso congelado
    if (CLIENTES_CON_PESO_CONGELADO[codigo]) {
        return {
            nombre: CLIENTES_CON_PESO_CONGELADO[codigo],
            mostrarPesoCongelado: true,
            requierePesoGlaseo: CLIENTES_CON_PESO_GLASEO[codigo] !== undefined
        };
    }

    // Verificar si el cliente está en la lista SIN peso congelado
    if (CLIENTES_SIN_PESO_CONGELADO[codigo]) {
        return {
            nombre: CLIENTES_SIN_PESO_CONGELADO[codigo],
            mostrarPesoCongelado: false,
            requierePesoGlaseo: CLIENTES_CON_PESO_GLASEO[codigo] !== undefined
        };
    }

    return null;
}

/**
 */
export function shouldShowPesoCongelado(codigo: string): boolean {
    const info = getClientInfo(codigo);
    return info?.mostrarPesoCongelado ?? true; // Por defecto muestra
}

/**
 * Obtiene el nombre del cliente por código
 * @param codigo Código del cliente
 * @returns Nombre del cliente o null si no se encuentra
 */
export function getClientName(codigo: string): string | null {
    const info = getClientInfo(codigo);
    return info?.nombre ?? null;
}

/**
 * Obtiene todos los códigos con sus nombres para autocomplete
 * @returns Array de {codigo, nombre} para usar en autocomplete
 */
export function getAllClients(): Array<{ codigo: string; nombre: string }> {
    const clientes: Array<{ codigo: string; nombre: string }> = [];

    // Agregar clientes CON peso congelado
    Object.entries(CLIENTES_CON_PESO_CONGELADO).forEach(([codigo, nombre]) => {
        clientes.push({ codigo, nombre });
    });

    // Agregar clientes SIN peso congelado
    Object.entries(CLIENTES_SIN_PESO_CONGELADO).forEach(([codigo, nombre]) => {
        // Evitar duplicados (algunos códigos pueden estar en ambas listas)
        if (!clientes.find(c => c.codigo === codigo)) {
            clientes.push({ codigo, nombre });
        }
    });

    return clientes.sort((a, b) => a.codigo.localeCompare(b.codigo));
}
