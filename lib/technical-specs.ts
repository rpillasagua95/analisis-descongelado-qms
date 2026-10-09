// Auto-generated from PDF Technical Sheets
// Generated at: 2025-12-04T05:53:01.061Z

export interface ProductSpec {
        code: string;
        description: string | null;
        client: string | null;
        brand: string | null;
        netWeight: number | null;
        netWeightUnit: string | null;
        grossWeight: number | null;
        grossWeightUnit: string | null;
        grossWeightMasters: number | null;
        grossWeightMastersUnit: string | null;
        overweightPct: string | null;
        productType: string;
        freezingMethod: string | null;
        destination: string | null;
        version: number | null;
        certification: string | null;
        color: string | null;
        packing: string | null;
        preservative: string | null;
        glazingRatio: number | null;
        glazingUnit: string | null;
        sizes: SizeSpec[];
        defects: DefectSpec[];
}

export interface SizeSpec {
        sizeMp: string;
        countMp: string;
        sizeMarked: string;
        uniformity: number | null;
        countFinal: string;
}

export interface DefectSpec {
        defect: string;
        limit: string | number;
}

// Datos FICTICIOS de demostracion: no corresponden a ningun cliente ni producto real.
export const TECHNICAL_SPECS: Record<string, ProductSpec> = {
        "D0001": {
                "code": "D0001",
                "description": "D0001 - COLA DE CAMARON CRUDA CONGELADA (DEMO)",
                "client": "CLIENTE DEMO A",
                "brand": "MARCA DEMO",
                "destination": "DESTINO DEMO",
                "version": 1,
                "productType": "COLA",
                "freezingMethod": "BLOCK FROZEN",
                "certification": "CONVENCIONAL",
                "color": "A2",
                "preservative": "METABISULFITO DE SODIO (E223)",
                "overweightPct": "1%",
                "glazingRatio": 400,
                "glazingUnit": "ml",
                "sizes": [
                        {
                                "sizeMp": "16-20",
                                "countMp": "17-19",
                                "countFinal": "17-19",
                                "sizeMarked": "16-20",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "21-25",
                                "countMp": "22-24",
                                "countFinal": "22-24",
                                "sizeMarked": "21-25",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "26-30",
                                "countMp": "27-29",
                                "countFinal": "27-29",
                                "sizeMarked": "26-30",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "31-35",
                                "countMp": "32-34",
                                "countFinal": "32-34",
                                "sizeMarked": "31-35",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "36-40",
                                "countMp": "37-39",
                                "countFinal": "37-39",
                                "sizeMarked": "36-40",
                                "uniformity": 1.35
                        },
                        {
                                "sizeMp": "41-50",
                                "countMp": "44-46",
                                "countFinal": "44-46",
                                "sizeMarked": "41-50",
                                "uniformity": 1.4
                        },
                        {
                                "sizeMp": "51-60",
                                "countMp": "54-56",
                                "countFinal": "54-56",
                                "sizeMarked": "51-60",
                                "uniformity": 1.4
                        },
                        {
                                "sizeMp": "61-70",
                                "countMp": "64-66",
                                "countFinal": "64-66",
                                "sizeMarked": "61-70",
                                "uniformity": 1.5
                        },
                        {
                                "sizeMp": "71-90",
                                "countMp": "79-81",
                                "countFinal": "79-81",
                                "sizeMarked": "71-90",
                                "uniformity": 1.5
                        },
                        {
                                "sizeMp": "91-110",
                                "countMp": "99-101",
                                "countFinal": "99-101",
                                "sizeMarked": "91-110",
                                "uniformity": 1.6
                        },
                        {
                                "sizeMp": "U-10",
                                "countMp": "8-10",
                                "countFinal": "8-10",
                                "sizeMarked": "U-10",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "U-12",
                                "countMp": "11-12",
                                "countFinal": "11-12",
                                "sizeMarked": "U-12",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "U-15",
                                "countMp": "13-15",
                                "countFinal": "13-15",
                                "sizeMarked": "U-15",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "U-7",
                                "countMp": "6-7",
                                "countFinal": "6-7",
                                "sizeMarked": "U-7",
                                "uniformity": 1.3
                        }
                ],
                "defects": [
                        {
                                "defect": "RESIDUOS_DE_HEPATOPANCREAS",
                                "limit": "0%"
                        },
                        {
                                "defect": "SABOR_GALLINAZA_FUERTE",
                                "limit": "NO"
                        },
                        {
                                "defect": "SABOR_GALLINAZA_LEVE",
                                "limit": "NO"
                        },
                        {
                                "defect": "MANCHAS_NEGRAS_FUERTES",
                                "limit": "0%"
                        },
                        {
                                "defect": "SABOR_TIERRA_FUERTE",
                                "limit": "NO"
                        },
                        {
                                "defect": "MANCHAS_NEGRAS_LEVES",
                                "limit": "10%"
                        },
                        {
                                "defect": "SABOR_TIERRA_LEVE",
                                "limit": "NO"
                        },
                        {
                                "defect": "RESIDUAL_DE_SULFITO",
                                "limit": "80-100"
                        },
                        {
                                "defect": "VARIACION_DE_COLOR",
                                "limit": "N/A"
                        },
                        {
                                "defect": "MAL_DESCABEZADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "DESHIDRATADO",
                                "limit": "10%"
                        },
                        {
                                "defect": "DEFECTOS_TOTALES",
                                "limit": "30%"
                        },
                        {
                                "defect": "SEMIROSADO",
                                "limit": "0%"
                        },
                        {
                                "defect": "SABOR_CHOCLO",
                                "limit": "NO"
                        },
                        {
                                "defect": "SABOR_COMBUSTIBLE",
                                "limit": "NO"
                        },
                        {
                                "defect": "QUEBRADO",
                                "limit": "0%"
                        },
                        {
                                "defect": "MELANOSIS",
                                "limit": "0%"
                        },
                        {
                                "defect": "FLACIDO",
                                "limit": "10%"
                        },
                        {
                                "defect": "MUDADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "ROSADO",
                                "limit": "0%"
                        },
                        {
                                "defect": "COLOR",
                                "limit": "N/A"
                        },
                        {
                                "defect": "SABOR",
                                "limit": "NO"
                        }
                ],
                "packing": "10 Und * 3.64 Lb",
                "netWeightUnit": "LB",
                "netWeight": 3.64,
                "grossWeightUnit": "LB",
                "grossWeight": 4.72,
                "grossWeightMastersUnit": "LB",
                "grossWeightMasters": 48.5
        },
        "D0002": {
                "code": "D0002",
                "description": "D0002 - CAMARON ENTERO CRUDO CONGELADO (DEMO)",
                "client": "CLIENTE DEMO B",
                "brand": "MARCA DEMO",
                "destination": "DESTINO DEMO",
                "version": 1,
                "productType": "ENTERO",
                "freezingMethod": "BRINE",
                "certification": "CONVENCIONAL",
                "color": "A1/A2/A2+/A3/A4 Color Marcado A2/A3",
                "preservative": "METABISULFITO DE SODIO (E223)",
                "overweightPct": "2%",
                "glazingRatio": 5,
                "glazingUnit": "%",
                "sizes": [
                        {
                                "sizeMp": "10-20",
                                "countMp": "14-17",
                                "countFinal": "14-17",
                                "sizeMarked": "10-20",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "20-30",
                                "countMp": "24-27",
                                "countFinal": "24-27",
                                "sizeMarked": "20-30",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "30-40",
                                "countMp": "34-37",
                                "countFinal": "34-37",
                                "sizeMarked": "30-40",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "40-50",
                                "countMp": "44-47",
                                "countFinal": "44-47",
                                "sizeMarked": "40-50",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "50-60",
                                "countMp": "54-57",
                                "countFinal": "54-57",
                                "sizeMarked": "50-60",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "60-70",
                                "countMp": "64-67",
                                "countFinal": "64-67",
                                "sizeMarked": "60-70",
                                "uniformity": 1.35
                        },
                        {
                                "sizeMp": "70-80",
                                "countMp": "74-77",
                                "countFinal": "74-77",
                                "sizeMarked": "70-80",
                                "uniformity": 1.4
                        },
                        {
                                "sizeMp": "80-100",
                                "countMp": "88-92",
                                "countFinal": "88-92",
                                "sizeMarked": "80-100",
                                "uniformity": 1.4
                        }
                ],
                "defects": [
                        {
                                "defect": "BRANQUIAS_AMARILLAS_FUERTES",
                                "limit": "50%"
                        },
                        {
                                "defect": "BRANQUIAS_AMARILLAS_LEVES",
                                "limit": "SI"
                        },
                        {
                                "defect": "BRANQUIAS_OSCURAS_FUERTES",
                                "limit": "30%"
                        },
                        {
                                "defect": "BRANQUIAS_OSCURAS_LEVES",
                                "limit": "SI"
                        },
                        {
                                "defect": "SABOR_GALLINAZA_FUERTE",
                                "limit": "SI"
                        },
                        {
                                "defect": "SABOR_GALLINAZA_LEVE",
                                "limit": "SI"
                        },
                        {
                                "defect": "MANCHAS_NEGRAS_FUERTES",
                                "limit": "20%"
                        },
                        {
                                "defect": "HONGO_BUCAL_FUERTE",
                                "limit": "SI"
                        },
                        {
                                "defect": "SABOR_TIERRA_FUERTE",
                                "limit": "SI"
                        },
                        {
                                "defect": "MANCHAS_NEGRAS_LEVES",
                                "limit": "SI"
                        },
                        {
                                "defect": "HONGO_BUCAL_LEVE",
                                "limit": "SI"
                        },
                        {
                                "defect": "SABOR_TIERRA_LEVE",
                                "limit": "SI"
                        },
                        {
                                "defect": "RESIDUAL_DE_SULFITO",
                                "limit": "30-70"
                        },
                        {
                                "defect": "VARIACION_DE_COLOR",
                                "limit": "N/A"
                        },
                        {
                                "defect": "CABEZA_DESCOLGADA",
                                "limit": "20%"
                        },
                        {
                                "defect": "DEFORMES_FUERTES",
                                "limit": "SI"
                        },
                        {
                                "defect": "HEMOLINFAS_LEVES",
                                "limit": "SI"
                        },
                        {
                                "defect": "HEPATO_REVENTADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "HEMOLINFAS_FUERTES",
                                "limit": "SI"
                        },
                        {
                                "defect": "DEFORMES_LEVES",
                                "limit": "SI"
                        },
                        {
                                "defect": "HEPATO_REGADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "CABEZA_NARANJA",
                                "limit": "20%"
                        },
                        {
                                "defect": "DEFECTOS_TOTALES",
                                "limit": "70%"
                        },
                        {
                                "defect": "CABEZA_FLOJA",
                                "limit": "SI"
                        },
                        {
                                "defect": "CABEZA_ROJA",
                                "limit": "FUERTESI"
                        },
                        {
                                "defect": "SABOR_CHOCLO",
                                "limit": "SI"
                        },
                        {
                                "defect": "SABOR_COMBUSTIBLE",
                                "limit": "NO"
                        },
                        {
                                "defect": "FLACIDO",
                                "limit": "30%"
                        },
                        {
                                "defect": "MUDADO",
                                "limit": "20%"
                        },
                        {
                                "defect": "COLOR",
                                "limit": "N/A"
                        },
                        {
                                "defect": "SABOR",
                                "limit": "TIERRA (SI/SI), GALLINAZA (SI/SI), CHOCLO (SI)"
                        }
                ],
                "packing": "1 Und * 12 Kg",
                "netWeightUnit": "KG",
                "netWeight": 12,
                "grossWeightUnit": "KG",
                "grossWeight": 12.74,
                "grossWeightMastersUnit": "KG",
                "grossWeightMasters": 13.62
        },
        "D0003": {
                "code": "D0003",
                "description": "D0003 - PRODUCTO DEMO",
                "client": "CLIENTE DEMO C",
                "brand": "MARCA DEMO",
                "destination": "DESTINO DEMO",
                "version": 1,
                "productType": "VALOR AGREGADO",
                "freezingMethod": "IQF",
                "certification": "CONVENCIONAL",
                "color": "A2/A3 Color Marcado A2/A3",
                "preservative": "METABISULFITO DE SODIO (E223)",
                "overweightPct": null,
                "glazingRatio": 3,
                "glazingUnit": "%",
                "sizes": [
                        {
                                "sizeMp": "16-20",
                                "countMp": "17-19",
                                "countFinal": "17-19",
                                "sizeMarked": "16-20",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "21-25",
                                "countMp": "22-24",
                                "countFinal": "22-24",
                                "sizeMarked": "21-25",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "26-30",
                                "countMp": "27-29",
                                "countFinal": "27-29",
                                "sizeMarked": "26-30",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "31-35",
                                "countMp": "32-34",
                                "countFinal": "32-34",
                                "sizeMarked": "31-35",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "36-40",
                                "countMp": "37-39",
                                "countFinal": "37-39",
                                "sizeMarked": "36-40",
                                "uniformity": 1.35
                        },
                        {
                                "sizeMp": "41-50",
                                "countMp": "44-46",
                                "countFinal": "44-46",
                                "sizeMarked": "41-50",
                                "uniformity": 1.4
                        },
                        {
                                "sizeMp": "51-60",
                                "countMp": "54-56",
                                "countFinal": "54-56",
                                "sizeMarked": "51-60",
                                "uniformity": 1.4
                        },
                        {
                                "sizeMp": "61-70",
                                "countMp": "64-66",
                                "countFinal": "64-66",
                                "sizeMarked": "61-70",
                                "uniformity": 1.5
                        },
                        {
                                "sizeMp": "71-90",
                                "countMp": "79-81",
                                "countFinal": "79-81",
                                "sizeMarked": "71-90",
                                "uniformity": 1.5
                        },
                        {
                                "sizeMp": "91-110",
                                "countMp": "99-101",
                                "countFinal": "99-101",
                                "sizeMarked": "91-110",
                                "uniformity": 1.6
                        },
                        {
                                "sizeMp": "U-10",
                                "countMp": "8-10",
                                "countFinal": "8-10",
                                "sizeMarked": "U-10",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "U-12",
                                "countMp": "11-12",
                                "countFinal": "11-12",
                                "sizeMarked": "U-12",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "U-15",
                                "countMp": "13-15",
                                "countFinal": "13-15",
                                "sizeMarked": "U-15",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "U-7",
                                "countMp": "6-7",
                                "countFinal": "6-7",
                                "sizeMarked": "U-7",
                                "uniformity": 1.3
                        },
                        {
                                "sizeMp": "BSMALL",
                                "countMp": "61/70",
                                "countFinal": "61/70",
                                "sizeMarked": "BSMALL",
                                "uniformity": null
                        },
                        {
                                "sizeMp": "BMEDIUM",
                                "countMp": "41/50",
                                "countFinal": "41/50",
                                "sizeMarked": "BMEDIUM",
                                "uniformity": null
                        },
                        {
                                "sizeMp": "BLARGE",
                                "countMp": "U7",
                                "countFinal": "U7",
                                "sizeMarked": "BLARGE",
                                "uniformity": null
                        },
                        {
                                "sizeMp": "BJUMBO",
                                "countMp": "BJUMBO",
                                "countFinal": "BJUMBO",
                                "sizeMarked": "BJUMBO",
                                "uniformity": null
                        }
                ],
                "defects": [
                        {
                                "defect": "RESIDUOS_DE_HEPATOPANCREAS",
                                "limit": "5%"
                        },
                        {
                                "defect": "MANCHAS_NEGRAS_FUERTES",
                                "limit": "5%"
                        },
                        {
                                "defect": "MANCHAS_NEGRAS_LEVES",
                                "limit": "15%"
                        },
                        {
                                "defect": "RESIDUAL_DE_SULFITO",
                                "limit": "30-100"
                        },
                        {
                                "defect": "CASCARA_APARTE",
                                "limit": "N"
                        },
                        {
                                "defect": "CORTE_IRREGULAR",
                                "limit": "5%"
                        },
                        {
                                "defect": "DESHIDRATADO",
                                "limit": "10%"
                        },
                        {
                                "defect": "RESTOS_DE_VENAS",
                                "limit": "5%"
                        },
                        {
                                "defect": "CORTE_PROFUNDO",
                                "limit": "5%"
                        },
                        {
                                "defect": "FALTA_DE_CORTE",
                                "limit": "5%"
                        },
                        {
                                "defect": "DEFECTOS_TOTALES",
                                "limit": "30%"
                        },
                        {
                                "defect": "CORTE_LARGO",
                                "limit": "5%"
                        },
                        {
                                "defect": "MALTRATADO",
                                "limit": "NO"
                        },
                        {
                                "defect": "SEMIROSADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "SIN_TELSON",
                                "limit": "10%"
                        },
                        {
                                "defect": "QUEBRADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "MELANOSIS",
                                "limit": "0%"
                        },
                        {
                                "defect": "MUDADO",
                                "limit": "N"
                        },
                        {
                                "defect": "ROSADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "COLOR",
                                "limit": "A2,"
                        },
                        {
                                "defect": "SABOR",
                                "limit": "NO"
                        }
                ],
                "packing": "1 Und * 40 Lb",
                "netWeightUnit": "LB",
                "netWeight": 40,
                "grossWeightUnit": "LB",
                "grossWeight": 41.31,
                "grossWeightMastersUnit": "LB",
                "grossWeightMasters": 42.63
        },
        "D0004": {
                "code": "D0004",
                "description": "D0004 - CAMARON PELADO DESVENADO (DEMO)",
                "client": "CLIENTE DEMO D",
                "brand": "MARCA DEMO",
                "destination": "DESTINO DEMO",
                "version": 1,
                "productType": "VALOR_AGREGADO",
                "freezingMethod": "IQF",
                "certification": "CONVENCIONAL",
                "color": "A1/A2/A3 Color Marcado A2/A3",
                "preservative": "METABISULFITO DE SODIO (E223)",
                "overweightPct": "1%",
                "glazingRatio": 5,
                "glazingUnit": "%",
                "sizes": [
                        {
                                "sizeMp": "16-20",
                                "countMp": "18-19",
                                "countFinal": "19-20",
                                "sizeMarked": "16-20",
                                "uniformity": 1.45
                        },
                        {
                                "sizeMp": "21-25",
                                "countMp": "23-24",
                                "countFinal": "24-25",
                                "sizeMarked": "21-25",
                                "uniformity": 1.45
                        },
                        {
                                "sizeMp": "26-30",
                                "countMp": "28-29",
                                "countFinal": "29-30",
                                "sizeMarked": "26-30",
                                "uniformity": 1.45
                        }
                ],
                "defects": [
                        {
                                "defect": "RESIDUOS_DE_HEPATOPANCREAS",
                                "limit": "5%"
                        },
                        {
                                "defect": "MANCHAS_NEGRAS_FUERTES",
                                "limit": "5%"
                        },
                        {
                                "defect": "MANCHAS_NEGRAS_LEVES",
                                "limit": "15%"
                        },
                        {
                                "defect": "RESIDUAL_DE_SULFITO",
                                "limit": "30-100"
                        },
                        {
                                "defect": "CASCARA_APARTE",
                                "limit": "5%"
                        },
                        {
                                "defect": "CORTE_IRREGULAR",
                                "limit": "5%"
                        },
                        {
                                "defect": "DESHIDRATADO",
                                "limit": "10%"
                        },
                        {
                                "defect": "RESTOS_DE_VENAS",
                                "limit": "5%"
                        },
                        {
                                "defect": "CORTE_PROFUNDO",
                                "limit": "5%"
                        },
                        {
                                "defect": "FALTA_DE_CORTE",
                                "limit": "5%"
                        },
                        {
                                "defect": "DEFECTOS_TOTALES",
                                "limit": "30%"
                        },
                        {
                                "defect": "CORTE_LARGO",
                                "limit": "5%"
                        },
                        {
                                "defect": "MALTRATADO",
                                "limit": "NO"
                        },
                        {
                                "defect": "SEMIROSADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "SIN_TELSON",
                                "limit": "5%"
                        },
                        {
                                "defect": "QUEBRADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "MELANOSIS",
                                "limit": "0%"
                        },
                        {
                                "defect": "MUDADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "ROSADO",
                                "limit": "5%"
                        },
                        {
                                "defect": "COLOR",
                                "limit": "A2,"
                        },
                        {
                                "defect": "SABOR",
                                "limit": "NO"
                        }
                ],
                "packing": "4 Und * 5 Lb",
                "netWeightUnit": "LB",
                "netWeight": 5,
                "grossWeightUnit": "LB",
                "grossWeight": 5.4,
                "grossWeightMastersUnit": "LB",
                "grossWeightMasters": 22.71
        }
};
