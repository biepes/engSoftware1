const Hospital = require('../models/Hospital');

module.exports = {
    async store() {
        const data = [
            {
                uf: 'AC',
                cidade: 'Rio Branco',
                hospital: 'Hospital Geral de Clínicas de Rio Branco'
            },
            {
                uf: 'AL',
                cidade: 'Maceió',
                hospital: 'Hospital Escola Dr. Hélvio Auto'
            },
            {
                uf: 'AM',
                cidade: 'Manaus',
                hospital: 'Instituto da Mulher Dona Lindu'
            },
            {
                uf: 'AM',
                cidade: 'Manaus',
                hospital: 'Hospital Infantil Dr. Fajardo'
            },
            {
                uf: 'AM',
                cidade: 'Manaus',
                hospital: 'Hosiptal de Referencia Ana Braga'
            },
            {
                uf: 'AM',
                cidade: 'Manaus',
                hospital: 'Hospital e Pronto Socorro da Criança Zona Leste'
            },
            {
                uf: 'AM',
                cidade: 'Manaus',
                hospital: 'Hospital Delphina Rinaldi Abdel Aziz'
            },
            {
                uf: 'AM',
                cidade: 'Manaus',
                hospital: 'Instituto da Criança do Amazonas'
            },
            {
                uf: 'AP',
                cidade: 'Macapá',
                hospital: 'Centro de Referência em Doenças Transmissíveis (CDT) do Hospital de Especialidades Dr. Alberto Lima'
            },
            {
                uf: 'BA',
                cidade: 'Salvador',
                hospital: 'Instituto Couto Maia (ICON)'
            },
            {
                uf: 'CE',
                cidade: 'Fortaleza',
                hospital: 'Hospital São José'
            },
            {
                uf: 'DF',
                cidade: 'Brasília',
                hospital: 'Hospital Regional da Asa Norte'
            },
            {
                uf: 'ES',
                cidade: 'Serra',
                hospital: 'Hospital Estadual Jayme dos Santos Neves - HEJSN'
            },
            {
                uf: 'ES',
                cidade: 'Vitória',
                hospital: 'Hospital Infantil Nossa Senhora da Glória - HINSG'
            },
            {
                uf: 'GO',
                cidade: 'Goiânia',
                hospital: 'Hospital Estadual de Doenças Tropicais - HDT'
            },
            {
                uf: 'GO',
                cidade: 'Goiânia',
                hospital: 'Hospital Estadual Materno Infantil'
            },
            {
                uf: 'MA',
                cidade: 'São Luís',
                hospital: 'Hospital de Referência Estadual de Alta Complexidade Dr. Carlos Macieira'
            },
            {
                uf: 'MA',
                cidade: 'São Luís',
                hospital: 'Hospital Presidente Vargas'
            },
            {
                uf: 'MG',
                cidade: 'Belo Horizonte',
                hospital: 'Eduardo de Menezes'
            },
            {
                uf: 'MS',
                cidade: 'Campo Grande',
                hospital: 'Hospital Universitário Maria Aparecida Pedrosian'
            },
            {
                uf: 'MT',
                cidade: 'Cuiabá',
                hospital: 'Hospital Universitário Julio Muller'
            },
            {
                uf: 'PA',
                cidade: 'Altamira',
                hospital: 'Hospital Regional Público da Transamazônica (Altamira)'
            },
            {
                uf: 'PA',
                cidade: 'Belém',
                hospital: 'Fundação Santa Casa de Misericórdia do Pará (Belém)'
            },
            {
                uf: 'PA',
                cidade: 'Belém',
                hospital: 'Hospital Regional Abelardo Santos (Belém)'
            },
            {
                uf: 'PA',
                cidade: 'Belém',
                hospital: 'Hospital Universitário Joçao de Barros Barreto (HUJBB)'
            },
            {
                uf: 'PA',
                cidade: 'Breves',
                hospital: 'Hospital Regional público do Marajo (Breves)'
            },
            {
                uf: 'PA',
                cidade: 'Conceição do Araguaia ',
                hospital: 'Hospital regional de Conceição do Araguaia (Conceição do Araguaia)'
            },
            {
                uf: 'PA',
                cidade: 'Marabá',
                hospital: 'Hospital Regional do Sudeste do Pará (Marabá)'
            },
            {
                uf: 'PA',
                cidade: 'Paragominas',
                hospital: 'Hospital Regional Público do Leste (Paragominas)'
            },
            {
                uf: 'PA',
                cidade: 'Redenção',
                hospital: 'Hospital Regional Público do Araguaia (Redenção)'
            },
            {
                uf: 'PA',
                cidade: 'Santarém',
                hospital: 'Hospital Regional do Baixo Amazonas (Santarém)'
            },
            {
                uf: 'PA',
                cidade: 'Tucuruí',
                hospital: 'Hospital Regional de Tucuruí (Tucurui)'
            },
            {
                uf: 'PB',
                cidade: 'João Pessoa',
                hospital: 'Hospital Universitário Lauro Wanderley'
            },
            {
                uf: 'PB',
                cidade: 'João Pessoa',
                hospital: 'Hospital Clementino Fraga'
            },
            {
                uf: 'PE',
                cidade: 'Recife',
                hospital: 'Hospital Correia Picanço'
            },
            {
                uf: 'PE',
                cidade: 'Recife',
                hospital: 'Hospital Universitário Oswaldo Cruz'
            },
            {
                uf: 'PI',
                cidade: 'Teresina',
                hospital: 'Instituto de Doenças Tropicais Natan Portela - IDTNP'
            },
            {
                uf: 'PR',
                cidade: 'Cascavel',
                hospital: 'Hospital Universitário do Oeste do Paraná - Cascavel'
            },
            {
                uf: 'PR',
                cidade: 'Curitiba',
                hospital: 'Complexo Hospitalar do Trabalhador - Curitiba'
            },
            {
                uf: 'PR',
                cidade: 'Foz do Iguaçu',
                hospital: 'Hospital Municipal de Foz do Iguaçu Padre Germano Lauck - Foz do Iguaçu'
            },
            {
                uf: 'PR',
                cidade: 'Londrina',
                hospital: 'Hospital Universitário da Região Norte do Paraná - Londrina'
            },
            {
                uf: 'PR',
                cidade: 'Maringá',
                hospital: 'Hospital Universitário Regional de Maringá - Maringá'
            },
            {
                uf: 'PR',
                cidade: 'Paranaguá',
                hospital: 'Hospital Regional do Litoral - Paranaguá'
            },
            {
                uf: 'PR',
                cidade: 'Ponta Grossa',
                hospital: 'Hospital Universitário Regional dos Campos Gerais - Ponta Grossa'
            },
            {
                uf: 'RJ',
                cidade: 'Rio de Janeiro',
                hospital: 'INI - Instituto Nacional de Infectologia Evandro Chagas - Fiocruz'
            },
            {
                uf: 'RN',
                cidade: 'Mossoró',
                hospital: 'Hospital Rafael Fernandes (Mossoró)'
            },
            {
                uf: 'RN',
                cidade: 'Natal',
                hospital: 'Hospital Giselda Trigueiro (Natal)'
            },
            {
                uf: 'RO',
                cidade: 'Porto Velho',
                hospital: 'Centro de Medicina Tropical (CEMETRON)'
            },
            {
                uf: 'RO',
                cidade: 'Porto Velho',
                hospital: 'Hospital Infantil Cosme Damião'
            },
            {
                uf: 'RR',
                cidade: 'Boa Vista',
                hospital: 'Hospital da Criança Santo Antônio (HCSA)'
            },
            {
                uf: 'RR',
                cidade: 'Boa Vista',
                hospital: 'Hospital Geral de Roraima (HGR)'
            },
            {
                uf: 'RS',
                cidade: 'Canoas',
                hospital: 'Hospital Universitário de Canoas'
            },
            {
                uf: 'RS',
                cidade: 'Porto Alegre',
                hospital: 'Hospital Nossa Senhora da Conceição'
            },
            {
                uf: 'SC',
                cidade: 'Florianópolis',
                hospital: 'Hospital Nereu Ramos (adulto)'
            },
            {
                uf: 'SC',
                cidade: 'Florianópolis',
                hospital: 'Hospital Infantil Joana Gusmão (crianças até 15 anos)'
            },
            {
                uf: 'SE',
                cidade: 'Aracaju',
                hospital: 'Hospital Governador João Alves Filho ( Hospital de Urgências de Sergipe)'
            },
            {
                uf: 'SP',
                cidade: 'São Paulo',
                hospital: 'Instituto de Infectologia Emílio Ribas'
            },
            {
                uf: 'TO',
                cidade: 'Palmas',
                hospital: 'Hospital Geral de Palmas (HGP)'
            }
        ]
        await Hospital.storage.deleteMany({})
        Hospital.storage.create(data);
    }
}