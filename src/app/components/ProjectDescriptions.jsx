import React from "react";
import Footer from "@/app/components/Footer";

const ProjectDescriptions = {
    Maintenance: () => (
        <div className="space-y-4 text-sm">
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Mises à jour et correctifs :</span> Installation régulière de mises à jour logicielles, correctifs de sécurité et mises à jour système pour garantir que les systèmes sont à jour et protégés contre les failles de sécurité.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Optimisation des performances :</span> Optimiser les réglages du système pour maximiser les performances de l&apos;ordinateur.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Gestion des actifs informatiques :</span> Suivi et gestion des actifs matériels et logiciels, y compris l&apos;inventaire, la mise à jour et la gestion des licences logicielles.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Support technique :</span> Fourniture d&apos;une assistance technique aux utilisateurs finaux.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Gestion des utilisateurs et des droits d&apos;accès :</span> Configuration et gestion des comptes utilisateurs, des autorisations et des politiques de sécurité pour garantir que seules les personnes autorisées ont accès aux systèmes et aux données sensibles.
            </p>
        </div>
    ),
    Depannage: () => (
        <div className="space-y-4 text-sm">
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Diagnostic et résolution de problèmes techniques :</span>  Identification et résolution des problèmes matériels et logiciels sur les ordinateurs, les périphériques et les réseaux informatiques.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Remplacement matériel :</span> Remplacement de composants défectueux sur les ordinateurs, tels que les disques durs, les cartes mères, les alimentations électriques, les processeurs.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Suppression de virus et de logiciels malveillants : </span> Élimination des logiciels malveillants, des virus et des programmes indésirables.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Récupération de données :</span> Récupération de données perdues ou corrompues à partir de disques durs, de clés USB, de cartes mémoire et d&apos;autres supports de stockage
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Sauvegarde des données :</span>Configuration de solutions de sauvegarde automatique pour éviter la perte de données en cas de panne ou de dommages matériels.
            </p>
        </div>
    ),
    Assemblage: () => (
        <div className="space-y-4 text-sm">
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Assemblage de l&apos;ordinateur :</span>Assembler physiquement les composants pour construire l&apos;ordinateur selon les spécifications du client, en veillant à ce que tous les composants soient correctement installés et connectés.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Test de stabilité :</span>Effectuer des tests de stabilité pour s&apos;assurer que l&apos;ordinateur fonctionne correctement et qu&apos;il n&apos;y a pas de problèmes matériels ou logiciels.
            </p>
        </div>
    ),
    ConseilFormation: () => (
        <div className="space-y-4 text-sm">
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Sensibilisation à la sécurité : </span> Formation aux utilisateurs sur les meilleures pratiques en matière de sécurité informatique, y compris la sensibilisation aux menaces, la gestion des mots de passe et la navigation sécurisée sur Internet.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Formation et assistance :</span> Fournir une formation de base sur l&apos;utilisation de l&apos;ordinateur et offrir une assistance supplémentaire et personnalisée en cas de besoin.
            </p>
            <p className="text-base text-[#075985] text-sm">
                <span className="font-semibold">Conseils et consultation :</span> Fournir des conseils personnalisés sur le choix des composants informatiques en fonction des besoins.
            </p>
        </div>
    ),
};

export default ProjectDescriptions;