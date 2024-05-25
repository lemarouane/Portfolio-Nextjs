const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Diplome Ingénieur d’Etat en Systèmes d’Information',
                degree: 'Ecole des Sciences de L’information Rabat',
                detail: "Ingénierie des Systèmes d'Information et Transformation Digitale",
                year: '2021-2024'
            },
            {
                id: 1,
                title: 'Classes Préparatoires Maths-Physique',
                degree: 'Cycle Préparatoire CPGE Mohammed VI',
                detail: "Etudes préparatoire en Maths-Physiques-Science d'Ingénieur",
                year: '2019-2021'
            },
            {
                id: 2,
                title: 'Baccaulauréat Scientifique : T.Bien',
                degree: 'Sciences Physiques 18.23',
                detail: "Les études de bases en Sciences générales",
                year: '2018-2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Ingénieur Big Data et Intelligence Artificielle',
                role: 'Interakt Agency                ',
                url: 'https://interaktagency.com/',
                desc: 'Utilisation de technologies telles que Hadoop, Spark et Kafka pour le traitement des données à grande échelle.',
                location: 'Rabat - Morocco'
            },
            {
                id: 2,
                title: 'Data Analyst : Python - PowerBi',
                role: 'WordSysteme',
                url: 'no website',
                desc: 'Collecte, nettoyage et analyse de données pour obtenir des insights significatifs.',
                desc: 'Développement de modèles prédictifs en utilisant des techniques de machine learning.',
                location: 'Casablanca, Morocco'
            },
            {
                id: 3,
                title: 'Développeur Full Stack : Java – JEE - Angular',
                role: 'Albarid Bank',
                url: 'no website',
                desc: "Intégration de services backend pour la collecte et le traitement des données.",
                location: 'Rabat, Morocco'
            },
            {
                id: 4,
                title: 'Data Engineer – Machine Learning : Tenserflow - FastApi',
                role: 'GazTown                ',
                url: 'https://townworksco.com/',
                desc: "   Développement d'un modèle intelligent pour la prédiction et analyse des résultats statistiques  ",
                location: 'Tanger, Morocco'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
