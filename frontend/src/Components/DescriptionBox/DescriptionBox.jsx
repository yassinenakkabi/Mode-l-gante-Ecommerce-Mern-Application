import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Détails du produit</div>
        <div className="descriptionbox-nav-box fade">
Avis (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Un site web de commerce électronique est une plateforme en ligne qui
          facilite l'achat et la vente de produits ou de services sur internet.
          Il sert de marché virtuel où les entreprises et les particuliers
          peuvent présenter leurs produits, interagir avec les clients et
          effectuer des transactions sans avoir besoin d'une présence physique.
          Les sites de commerce électronique ont gagné une immense popularité en
          raison de leur praticité, de leur accessibilité et de leur portée
          mondiale qu'ils offrent. Les sites de commerce électronique affichent
          généralement des produits ou des services accompagnés de descriptions
          détaillées, d'images, de prix et de toute variation disponible (par
          exemple, tailles, couleurs). Chaque produit a généralement sa propre
          page dédiée avec des informations pertinentes.
        </p>
        <p>
          Les sites de commerce électronique affichent généralement des produits
          ou des services accompagnés de descriptions détaillées, d'images, de
          prix et de toute variation disponible (par exemple, tailles,
          couleurs). Chaque produit a généralement sa propre page dédiée avec
          des informations pertinentes.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
