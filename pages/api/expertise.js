const expertise = [
    {
        id: 0,
        title: 'Développement Full Stack',
        desc: 'Je suis un développeur Full Stack expérimenté avec une grande expérience dans la création d’applications web robustes en utilisant MongoDB, Express.js, React.js et Node.js. Je possède une solide compréhension du rendu côté serveur, de l’intégration des API et de la gestion des bases de données. Grâce à mon expertise, je peux fournir des solutions web dynamiques et efficaces adaptées aux exigences uniques des clients.',
    },
    {
        id: 1,
        title: 'Analyste et Ingénieur de Données',
        desc: "En tant qu'analyste et ingénieur de données, je possède une expertise dans l'analyse et la manipulation des données. J'utilise des outils tels que Python, SQL et PowerBI pour extraire, nettoyer et visualiser les données. Ma compréhension approfondie des bases de données et des techniques d'analyse me permet de fournir des insights précieux pour la prise de décision.",
    },
    {
        id: 1,
        title: 'Scrum et Jira',
        desc: "En tant que développeur, je maîtrise les méthodologies Jira et Scrum. J'utilise Jira pour simplifier les tâches de gestion de projet telles que l'attribution des tâches, la priorisation et le suivi de l'avancement. Scrum a amélioré mon travail d'équipe, en utilisant les stand-ups quotidiens, la planification des sprints et les rétrospectives. Mon expertise garantit que des produits logiciels de haute qualité sont livrés rapidement.",
    },
    {
        id: 2,
        title: 'Ingénieur en Intelligence Artificielle',
        desc: "En tant qu'ingénieur en intelligence artificielle, j'ai une solide expérience dans le développement et le déploiement de modèles d'IA. Je maîtrise des langages de programmation tels que Python et des bibliothèques telles que TensorFlow et PyTorch. Mon expertise me permet de concevoir et d'implémenter des solutions d'IA innovantes pour résoudre des problèmes complexes dans divers domaines.",
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub est essentiel pour le contrôle de version et la collaboration. Son interface intuitive et ses fonctionnalités comme les pull requests et le suivi des problèmes simplifient le processus. L'intégration continue assure un code à jour. GitHub est vital pour mon succès en tant que développeur.",
    },
    {
        id: 5,
        title: 'Contributeur Open Source',
        desc: "L'Open Source est l'avenir. Je prends généralement un peu de temps le week-end pour contribuer à des projets open source. Cela me donne l'opportunité d'apprendre des meilleures pratiques des développeurs et aussi de pouvoir aider les autres et contribuer à la communauté pour le bien.",
    },
    
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
