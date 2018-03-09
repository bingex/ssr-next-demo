const Layout = props => (
	<div>
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
