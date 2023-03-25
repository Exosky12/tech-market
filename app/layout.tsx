import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';

export const metadata = {
	title: 'Tech Market',
	description: 'Ton market',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<ChakraProvider>
				<body>{children}</body>
			</ChakraProvider>
		</html>
	);
}
