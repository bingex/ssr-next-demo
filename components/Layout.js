import Head from 'next/head';

const Layout = props => (
	<div>
		<Head>
			<title>SSR Next.js Demo</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link
				rel="icon shortcut"
				href="https://ukraine.levi9.jobs/files/2016/06/favicon-levi9-2016.png"
			/>
		</Head>
		{props.children}
		<style jsx global>{`
			body {
				margin: 0;
				padding: 0;
				background: #31313c;
				font-family: sans-serif;
			}
		`}</style>
	</div>
);

export default Layout;
