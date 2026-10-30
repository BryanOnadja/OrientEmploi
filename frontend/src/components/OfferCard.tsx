import React from 'react';

export interface Offre {
  id: number;
  type: string;
  titre: string;
  organisation: string;
  region: string;
  ville: string;
  domaine: string;
  niveau?: string;
  modalite?: string;
  salaire_horaire?: number | null;
  duree_semaines?: number | null;
  date_publication?: string;
  date_limite?: string;
  competences?: string[];
  description: string;
}

interface OfferCardProps {
  offre: Offre;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ offre, isFavorite, onToggleFavorite }) => {
  return (
    <article style={{ 
      background: '#ffffff',
      border: '1px solid #e5e7eb', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '20px', 
      marginBottom: '20px', 
      borderRadius: '12px', 
      position: 'relative'
    }}>
      {/* Bouton Favori */}
      <button 
        onClick={() => onToggleFavorite(offre.id)} 
        style={{ 
          position: 'absolute', top: '20px', right: '20px', 
          background: isFavorite ? '#fef3c7' : '#f3f4f6', 
          color: isFavorite ? '#d97706' : '#6b7280', 
          border: isFavorite ? '1px solid #fde68a' : '1px solid #e5e7eb', 
          borderRadius: '20px', padding: '6px 12px', cursor: 'pointer',
          fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px'
        }}
      >
        {isFavorite ? '★ Favori' : '☆ Ajouter'}
      </button>
      
      {/* Titre et type */}
      <h3 style={{ marginTop: 0, paddingRight: '100px', color: '#111827', fontSize: '1.25rem' }}>
        {offre.titre} 
        <span style={{ fontSize: '0.7em', color: '#3b82f6', fontWeight: 'normal', backgroundColor: '#eff6ff', padding: '4px 10px', borderRadius: '12px', marginLeft: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {offre.type}
        </span>
      </h3>
      
      {/* Grille d'informations avec icônes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', color: '#4b5563', fontSize: '0.95rem', marginTop: '20px' }}>
        <p style={{ margin: '0' }}>🏢 <strong>{offre.organisation}</strong></p>
        <p style={{ margin: '0' }}>📍 {offre.ville}, {offre.region}</p>
        <p style={{ margin: '0' }}>📁 {offre.domaine}</p>
        
        {offre.type === 'emploi' && offre.salaire_horaire && (
          <p style={{ margin: '0', color: '#059669', fontWeight: 'bold' }}>💰 {offre.salaire_horaire} $/h</p>
        )}
        {offre.type === 'formation' && offre.duree_semaines && (
          <p style={{ margin: '0', color: '#059669', fontWeight: 'bold' }}>⏳ {offre.duree_semaines} semaines</p>
        )}
      </div>
      
      {/* Badges de compétences */}
      {offre.competences && offre.competences.length > 0 && (
        <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #f3f4f6' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {offre.competences.map((comp, index) => (
              <span key={index} style={{ background: '#f3f4f6', color: '#374151', padding: '4px 12px', borderRadius: '15px', fontSize: '0.85em', fontWeight: '500' }}>
                {comp}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default OfferCard;