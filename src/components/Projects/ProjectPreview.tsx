'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectPreviewProps {
  previewUrl?: string;
  image: string;
  alt: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ 
  previewUrl, 
  image, 
  alt 
}) => {
  const [iframeError, setIframeError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Se não houver previewUrl ou se o iframe deu erro, mostra imagem estática
  if (!previewUrl || iframeError) {
    return (
      <Image
        src={image}
        alt={alt}
        width={400}
        height={200}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }

  return (
    <>
      {loading && (
        <Image
          src={image}
          alt={alt}
          width={400}
          height={200}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: loading ? 1 : 0,
            transition: 'opacity 0.3s'
          }}
        />
      )}
      <iframe
        src={previewUrl}
        style={{
          width: '400%',
          height: '400%',
          border: 'none',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s',
          transform: 'scale(0.25)',
          transformOrigin: 'top left',
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        onLoad={() => setLoading(false)}
        onError={() => {
          setIframeError(true);
          setLoading(false);
        }}
        sandbox="allow-same-origin allow-scripts"
        loading="lazy"
        title={`Preview do ${alt}`}
      />
    </>
  );
};

