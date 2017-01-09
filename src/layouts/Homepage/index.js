import React from "react"
// import Page from "../Page"
// import LatestPosts from "../../components/LatestPosts"
// <LatestPosts />
import styles from './index.scss';
import 'animate.css/animate.css';
import meta from '../../metadata';

class Homepage extends React.Component {
	render() {
		return (
			<div>
				<section className={[styles.banner, 'animated slideInDown'].join(' ')}>
					Sit tight! I'm currently re-developing my portfolio. Please check back later! 🚀
				</section>
				<section className={styles.intro}>
					<div className={styles.columnWrapper}>
						<div className={[styles.halfColumn].join(' ')}>
							<div className={styles.box}>
								<div className={styles.boxText}>
									<span className="animated fadeInDown">T</span>
									<span className="animated fadeInUp">C</span>
								</div>
									<span className={styles.l1}></span>
									<span className={styles.l2}></span>
									<span className={styles.l3}></span>
									<span className={styles.l4}></span>
							</div>
						</div>
						<div className={[styles.halfColumn].join(' ')}>
							<div className={styles.name}>
								<div>Tom</div>
								<div>Conroy</div>
							</div>
							<div className={styles.roles}>
								<span>UX Designer</span> & <span>Front-End Developer</span>
								<ul className={styles.socialList}>
									<li className={styles.resume}><a title="View Resume" target="_blank" href="../assets/docs/tomconroy_webdeveloper_resume_2017.pdf"><i className="icon-resume" /></a></li>
									<li className={styles.twitter}><a title="Follow on Twitter" href={`//www.twitter.com/${meta.pkg.twitter}`}><i className="icon-twitter" /></a></li>
									<li className={styles.linkedin}><a title="Connect on LinkedIn" href={`//www.linkedin.com/in/${meta.pkg.linkedin}`}><i className="icon-linkedin" /></a></li>
									<li className={styles.github}><a title="View GitHub" href={`//www.github.com/${meta.pkg.github}`}><i className="icon-github" /></a></li>
									<li className={styles.email}><a title="Email" href={`mailto:tom@thomasconroy.net`}><i className="icon-paper-plane" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
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
