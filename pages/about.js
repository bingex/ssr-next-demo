import Layout from './../components/Layout';
import Link from 'next/link';

const About = () => (
	<Layout>
		<div className="description">
			<span>App for choosing a cocktail :)</span>
			<span>Demo Next.js app.</span>
		</div>
		<Link href="/">
			<img
				className="home"
				src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA2LjU1NSwyMDguMDY0TDI2My44NTksMzAuMzY3Yy00LjY4LTMuNDI2LTExLjAzOC0zLjQyNi0xNS43MTYsMEw1LjQ0NSwyMDguMDY0ICAgIGMtNS45MjgsNC4zNDEtNy4yMTYsMTIuNjY1LTIuODc1LDE4LjU5M3MxMi42NjYsNy4yMTQsMTguNTkzLDIuODc1TDI1Niw1Ny41ODhsMjM0LjgzNywxNzEuOTQzYzIuMzY4LDEuNzM1LDUuMTIsMi41Nyw3Ljg0OCwyLjU3ICAgIGM0LjA5NiwwLDguMTM4LTEuODg1LDEwLjc0NC01LjQ0NUM1MTMuNzcxLDIyMC43MjksNTEyLjQ4MywyMTIuNDA1LDUwNi41NTUsMjA4LjA2NHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg1ODVBNyIgZGF0YS1vbGRfY29sb3I9IiM4NTg1YTciPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ0Mi4yNDYsMjMyLjU0M2MtNy4zNDYsMC0xMy4zMDMsNS45NTYtMTMuMzAzLDEzLjMwM3YyMTEuNzQ5SDMyMi41MjFWMzQyLjAwOWMwLTM2LjY4LTI5Ljg0Mi02Ni41Mi02Ni41Mi02Ni41MiAgICBzLTY2LjUyLDI5Ljg0Mi02Ni41Miw2Ni41MnYxMTUuNTg3SDgzLjA1OFYyNDUuODQ3YzAtNy4zNDctNS45NTctMTMuMzAzLTEzLjMwMy0xMy4zMDNzLTEzLjMwMyw1Ljk1Ni0xMy4zMDMsMTMuMzAzdjIyNS4wNTMgICAgYzAsNy4zNDcsNS45NTcsMTMuMzAzLDEzLjMwMywxMy4zMDNoMTMzLjAyOWM2Ljk5NiwwLDEyLjcyMS01LjQwNSwxMy4yNTEtMTIuMjY3YzAuMDMyLTAuMzExLDAuMDUyLTAuNjUxLDAuMDUyLTEuMDM2di0xMjguODkgICAgYzAtMjIuMDA5LDE3LjkwNS0zOS45MTQsMzkuOTE0LTM5LjkxNHMzOS45MTQsMTcuOTA2LDM5LjkxNCwzOS45MTR2MTI4Ljg5YzAsMC4zODMsMC4wMiwwLjcxNywwLjA1MiwxLjAyNCAgICBjMC41MjQsNi44NjcsNi4yNTEsMTIuMjc5LDEzLjI1MSwxMi4yNzloMTMzLjAyOWM3LjM0NywwLDEzLjMwMy01Ljk1NiwxMy4zMDMtMTMuMzAzVjI0NS44NDcgICAgQzQ1NS41NDksMjM4LjQ5OSw0NDkuNTkzLDIzMi41NDMsNDQyLjI0NiwyMzIuNTQzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojODU4NUE3IiBkYXRhLW9sZF9jb2xvcj0iIzg1ODVhNyI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4="
			/>
		</Link>
		<style jsx>{`
			.description {
				display: flex;
				flex-direction: column;
				color: #f4f4f4;
				line-height: 2;
				margin: 40px;
			}
			.home {
				position: fixed;
				bottom: 20px;
				right: 20px;
				width: 40px;
				height: 40px;
				cursor: pointer;
			}
		`}</style>
	</Layout>
);

export default About;
