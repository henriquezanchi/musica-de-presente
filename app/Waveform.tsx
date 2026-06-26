import React from 'react';

const Waveform: React.FC<{ className?: string }> = ({ className }) => {
  // Alturas base de cada barra (em porcentagem) para dar o formato de losango da onda
  const bars = [30, 50, 80, 40, 100, 60, 90, 50, 70, 100, 80, 40, 90, 50, 100, 60, 40, 70, 30];

  return (
    <div className={`flex items-center justify-center gap-[3px] h-10 ${className}`}>
      {/* Estilos de animação embutidos para este componente */}
      <style>{`
        @keyframes equalize {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .audio-bar {
          width: 3px;
          background-color: #D4AF37;
          border-radius: 999px;
          animation: equalize 1.2s ease-in-out infinite;
          transform-origin: center;
          opacity: 0.6;
        }
      `}</style>
      
      {bars.map((height, index) => (
        <div
          key={index}
          className="audio-bar"
          style={{
            height: `${height}%`,
            animationDelay: `${index * 0.1}s`, // O atraso cria o efeito de onda
            animationDuration: `${1 + (index % 3) * 0.2}s` // Variação leve no ritmo
          }}
        />
      ))}
    </div>
  );
};

export default Waveform;