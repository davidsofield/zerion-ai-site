import React from 'react'
import _ from 'lodash'
import { Layout } from '../components/index'
import { safePrefix, htmlToReact, Link } from '../utils'

export default class Page extends React.Component {
	render() {
		return (
			<Layout {...this.props}>
				<div className="outer">
					<div className="inner-medium">
						<article className="post page post-full">
							<header className="post-header">
								<h1 className="post-title">
									{_.get(this.props, 'pageContext.frontmatter.title')}
								</h1>
							</header>
							{_.get(this.props, 'pageContext.frontmatter.img_path') && (
								<div className="post-thumbnail">
									<img
										src={safePrefix(
											_.get(this.props, 'pageContext.frontmatter.img_path')
										)}
										alt={_.get(this.props, 'pageContext.frontmatter.title')}
									/>
								</div>
							)}
							{_.get(this.props, 'pageContext.frontmatter.subtitle') && (
								<div className="post-subtitle">
									{htmlToReact(
										_.get(this.props, 'pageContext.frontmatter.subtitle')
									)}
								</div>
							)}
							<div className="post-content">
								{htmlToReact(_.get(this.props, 'pageContext.html'))}
							</div>
							<Link to="/contact" className="button xlarge">
								Start the Conversation
							</Link>
						</article>
					</div>
				</div>
			</Layout>
		)
	}
}
