import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  // Split text by $$...$$ (Display Mode) or $...$ (Inline Mode)
  // The regex captures the delimiters and content so we can identify them in the map
  const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$') && part.length >= 4) {
          // Display Mode
          const math = part.slice(2, -2);
          try {
            const html = katex.renderToString(math, { 
                displayMode: true, 
                throwOnError: false,
                output: 'html' // Render only HTML (no MathML) to avoid duplication issues in some browsers
            });
            return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
          } catch (error) {
            console.error(error);
            return <span key={index} className="text-red-500">{part}</span>;
          }
        } else if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
          // Inline Mode
          const math = part.slice(1, -1);
          try {
            const html = katex.renderToString(math, { 
                displayMode: false, 
                throwOnError: false,
                output: 'html'
            });
            return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
          } catch (error) {
            console.error(error);
            return <span key={index} className="text-red-500">{part}</span>;
          }
        } else {
          // Plain Text
          return <span key={index}>{part}</span>;
        }
      })}
    </span>
  );
};
