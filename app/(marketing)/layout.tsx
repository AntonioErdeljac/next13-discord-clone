import { Inter } from 'next/font/google'
import Header from './_components/Header';

const inter = Inter({ subsets: ['latin'] })

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <html lang="en">
    <body className={inter.className}>
      <Header />
      {children}
    </body>
  </html>
   );
}
 
export default MarketingLayout;