import React from 'react';

export const metadata = {
  title: 'Free STBB E-Books & Digital Textbooks | Sindh Universal Education Resource Hub',
  description:
    'Download and read free official Sindh Textbook Board (STBB Jamshoro) e-books for Class ECCE/Kachi to Class XII in Urdu, English, and Sindhi mediums. Approved by Sindh Curriculum Council — available free for all government schools of Liaquatabad Town.',
  keywords:
    'STBB ebooks, Sindh Textbook Board, free textbooks Sindh, class 1 to 12 books, Sindhi medium books, Urdu medium textbooks, government school books download, Liaquatabad education',
  openGraph: {
    title: 'Free STBB Digital Textbooks | Liaquatabad Town Education',
    description:
      'Access all official Sindh curriculum textbooks free online. Class I–XII, all mediums. Proudly hosted by Liaquatabad Town Education Office.',
    type: 'website',
  },
};

export default function EbooksLayout({ children }) {
  return <>{children}</>;
}
