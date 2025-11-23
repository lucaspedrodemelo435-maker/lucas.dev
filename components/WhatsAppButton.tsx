import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5513988460017";
  const message = encodeURIComponent("Olá Lucas, vi seu portfólio e gostaria de um orçamento.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce-subtle"
      aria-label="Fale comigo no WhatsApp"
      title="Fale comigo no WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="white"
        className="fill-current"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-9.667-.272-.099-.47-.149-.669-.149-.198 0-.42.001-.643.001-.223 0-.583.085-.89.421-.306.336-1.166 1.139-1.166 2.776 0 1.638 1.189 3.221 1.354 3.443.165.222 2.341 3.575 5.672 5.014 2.215.957 2.667.766 3.138.718.47-.048 1.511-.617 1.724-1.213.212-.595.212-1.104.148-1.213z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;