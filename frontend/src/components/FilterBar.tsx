import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [domaines, setDomaines] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  
  const [q, setQ] = useState('');
  const [domaine, setDomaine] = useState('');
  const [region, setRegion] = useState('');
  const [salaireMin, setSalaireMin] = useState('');

  useEffect(() => {
    api.get('/filtres')
      .then(res => {
        setDomaines(res.data.domaines);
        setRegions(res.data.regions);
      })
      .catch(err => console.error("Erreur", err));
  }, []);

  const handleApplyFilters = () => {
    onFilterChange({ q, domaine, region, salaireMin });
  };

  const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db', flex: '1', minWidth: '150px', outline: 'none' };

  return (
    <div style={{ 
      marginBottom: '30px', padding: '25px', 
      background: '#ffffff', 
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{ marginTop: 0, color: '#1f2937', marginBottom: '20px', fontSize: '1.2rem' }}>🔍 Rechercher des opportunités</h3>
      
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <input type="text" placeholder="Mot clé (ex: Soudure)..." value={q} onChange={(e) => setQ(e.target.value)} style={inputStyle} />
        
        <select value={domaine} onChange={(e) => setDomaine(e.target.value)} style={{...inputStyle, backgroundColor: 'white'}}>
          <option value="">Tous les domaines</option>
          {domaines.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        
        <select value={region} onChange={(e) => setRegion(e.target.value)} style={{...inputStyle, backgroundColor: 'white'}}>
          <option value="">Toutes les régions</option>
          {regions.map(r => <option key={r} value={r}>{r}</option>)}
        </select>

        <input type="number" placeholder="Salaire min ($/h)" value={salaireMin} onChange={(e) => setSalaireMin(e.target.value)} style={{...inputStyle, flex: '0 1 150px'}} />
      </div>
      
      <button onClick={handleApplyFilters} style={{ 
        padding: '12px 24px', background: '#3b82f6', color: 'white', 
        border: 'none', borderRadius: '8px', cursor: 'pointer', 
        fontWeight: 'bold', width: '100%', fontSize: '1rem',
        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
      }}>
        Appliquer les filtres
      </button>
    </div>
  );
};

export default FilterBar;