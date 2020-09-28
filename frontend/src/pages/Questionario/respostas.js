import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    sub1: {
        padding: theme.spacing(2)
    },
    sub2: {
        padding: theme.spacing(3)
    }
}))

const Respostas = ({resposta}) => {
    const classes = useStyles()
    if (resposta === 1) {
        return(
            <>
                <Typography className={classes.sub1} variant="h5" gutterBottom>
                    Caso Improvável
                </Typography>
                <Typography className={classes.sub1} variant="h6" gutterBottom>
                    Baseado em suas respostas, é provável que essa situação NÃO se enquadre como
                    caso suspeito de doença pelo coronavirus 2019 (COVID-19). 
                </Typography>
                <Typography className={classes.sub1} variant="subtitle2">
                    Mantenha as condutas de
                    precaução e prevenção, praticando a etiqueta respiratória:
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Ao se deslocar para uma unidade de saúde, siga as seguintes medidas de proteção individual e
                    etiqueta respiratória:
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Lave as mãos com frequência com água e sabão ou higienize com álcool gel 70%.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Cubra a boca e nariz com um lenço de papel ao tossir e espirrar e jogue no lixo após o uso, ou
                    proteja com o antebraço (nunca com as mãos).
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Evite tocar nos olhos, nariz e boca com as mãos não lavadas.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Evite locais com aglomeração de pessoas.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Não compartilhe objetos de uso pessoal.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Evite contato próximo com pessoas resfriadas ou que estejam com sintomas de gripe
                </Typography>
            </>
        )
    }
    if (resposta === 2) {
        return (
            <>
                <Typography className={classes.sub1} variant="h5" gutterBottom>
                    Isolamento Domiciliar 
                </Typography>
                <Typography className={classes.sub1} variant="subtitle2">
                    Preocupações Gerais:
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Toda vez que lavar as mãos com água e sabão, dar preferência ao papel-toalha. Caso não seja
                    possível, utilizar toalha de tecido e trocá-la toda vez que ficar úmida.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Todos os moradores da casa devem cobrir a boca e o nariz quando forem tossir ou espirrar,
                    seja com as mãos ou máscaras. Lavar as mãos e jogar as máscaras após.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Limpar frequentemente (mais de uma vez por dia) as superfícies que são frequentemente
                    tocadas com solução contendo alvejante (1 parte de alvejante para 99 partes de água); faça o
                    mesmo para banheiros e toaletes.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Lave roupas pessoais, roupas de cama e roupas de banho do paciente com sabão comum e
                    água entre 60-90ºC, deixe secar.
                </Typography>
            </>
        )
    }
    if (resposta === 3) {
        return (
            <>
                <Typography className={classes.sub1} variant="h5" gutterBottom>
                    Caso suspeito ou provável 
                </Typography>
                <Typography className={classes.sub1} variant="h6" gutterBottom>
                    Baseado em suas respostas, é provável que esta situação se enquadre como caso
                    suspeito ou provável de doença pelo coronavirus 2019 (COVID-19). No entanto, isto
                    não se trata de um diagnóstico. A orientação é que você procure atendimento em uma
                    unidade de saúde mais próxima para avaliação clínica.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle2">
                    Recomendações:
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Ao se deslocar para uma unidade de saúde, siga as seguintes medidas de proteção individual e
                    etiqueta respiratória:
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Utilize mascara facial, para evitar a transmissão de outras pessoas, durante o trajeto para a
                    unidade de saúde
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Lave as mãos frequentemente com água e sabão, ou higienize com álcool gel 70%
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Cubra a boca e nariz com um lenço de papel ao tossir e espirrar e jogue no lixo após o uso, ou
                    proteja com o antebraço (nunca com as mãos)
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Evite locais com aglomeração de pessoas
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    - Não compartilhe objetos de uso pessoal
                </Typography>
            </>
        )
    }
    if (resposta === 4) {
        return (
            <>
                <Typography className={classes.sub1} variant="h5" gutterBottom>
                    Urgência
                </Typography>
                <Typography className={classes.sub1} variant="h6" gutterBottom>
                    Baseado em suas respostas, é provável que esta situação se enquadre como caso
                    suspeito de doença pelo coronavírus 2019 (COVID-19). No entanto, isto não se trata de
                    um diagnóstico.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle2">
                    A orientação é que você procure atendimento em um serviço de urgência mais
                    próximo para avaliação clínica ou disque para o SAMU 192.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    Caso opte se deslocar para um serviço de urgência, siga as seguintes medidas de proteção
                    individual e etiqueta respiratória:
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    Opte por ter um acompanhante para auxiliá-lo no deslocamento até o serviço de urgência. O
                    acompanhante deve utilizar uma máscara facial e lavar constantemente as mãos com água e
                    sabão ou álcool em gel.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    Busque imediatamente o serviço, não faça desvios de caminho e evite transportes públicos.
                    Utilize máscara facial para evitar a transmissão de outras pessoas durante o trajeto para o
                    serviço de urgência.
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    Lave as mãos frequentemente com água e sabão ou higiene com álcool em gel 70%.
                    Cubra a boca e nariz com um lenço de papel ao tossir e/ou espirrar e jogue no lixo após o uso,
                    ou proteja com o antebraço (nunca com as mãos).
                </Typography>
                <Typography className={classes.sub1} variant="subtitle1">
                    Evite locais com aglomeração de pessoas. Não compartilhe objetos de uso pessoal
                </Typography>
            </>
        )
    }
    
}

export default (Respostas)