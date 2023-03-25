import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
	title: 'Tech Market',
	description: 'Ton market tech favoris ! ',
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
