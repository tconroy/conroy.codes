import React from "react"
// import Page from "../Page"
// import LatestPosts from "../../components/LatestPosts"
// <LatestPosts />
import styles from './index.scss';
import 'animate.css/animate.css';

// const titleAnim = ((w) => {
// 	const isMobile = w && w <= 800 || window.innerWidth <= 800;
// 	return {
// 		leftCol: `animated ${!isMobile ? 'fadeInLeft' : 'fadeInDown'}`,
// 		rightCol: `animated ${!isMobile ? 'fadeInRight' : 'fadeInUp'}`,
// 	}
// })(window.innerWidth);

class Homepage extends React.Component {
	render() {
		return (
			<section className={styles.intro}>
				<div className={[styles.banner, 'animated slideInDown'].join(' ')}>
					<p>Sit tight! I'm currently re-developing my portfolio. Please check back later! 🚀</p>
				</div>
				<div className={styles.columnWrapper}>
					<div className={[styles.halfColumn].join(' ')}>
						<div className={styles.box}>
							<div className={styles.boxText}>TC</div>
						</div>
					</div>
					<div className={[styles.halfColumn].join(' ')}>
						<div className={styles.name}>
							<div>Tom</div>
							<div>Conroy</div>
						</div>
						<div className={styles.roles}>
							<span>UX Designer</span> & <span>Front-End Developer</span>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

// const Homepage = (props) => {
//   // return (
//   //   <Page { ...props }>
//   //   </Page>
//   // )
//   return (
// 		<section className={styles.intro}>
// 			<div className={styles.columnWrapper}>
// 				<div className={[styles.halfColumn, titleAnim.leftCol].join(' ')}>
// 					<div className={styles.box}>
// 						<div className={styles.boxText}>TC</div>
// 					</div>
// 				</div>
// 				<div className={[styles.halfColumn, titleAnim.rightCol].join(' ')}>
// 					<div className={styles.name}>
// 						<div>Tom</div>
// 						<div>Conroy</div>
// 					</div>
// 					<div className={styles.roles}>
// 						<span>UX Designer</span> & <span>Front-End Developer</span>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

export default Homepage
