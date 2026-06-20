const normalizeIconColor = (svgString) => {
	if (!svgString) return svgString;
	return svgString
		.replace(/fill\s*=\s*["'][^"']*["']/gi, 'fill="currentColor"')
		.replace(/(<svg[^>]*)(>)/i, (match, p1, p2) => {
			if (!p1.includes('fill=')) {
				return p1 + ' fill="currentColor"' + p2;
			}
			return match;
		});
};

export const OneCard = ({ attributes, Richtext, setAttributes }) => {
	const {
		profiles = [],
		options = { showName: true, showDesignation: true, showBio: false, showSocial: true, openInNewTab: true }
	} = attributes || {};

	return (
		<div className='tsb_otc_section'>
			<div className='tsb_otc_container'>
				<div className='tsb_otc_cards'>
					{profiles.map((profile, index) => (
						<div className='tsb_otc_member_card' key={index}>
							<div className='tsb_otc_avatar'>
								{profile.image
									? <img src={profile.image} alt={profile.name || ''} />
									: <div className='tsb_otc_avatar_placeholder' />
								}
							</div>

							<div className='tsb_otc_info'>
								{options.showName && profile.name && !Richtext && <h5 className='tsb_otc_name' dangerouslySetInnerHTML={{ __html: profile.name }} />}

								{options.showName && Richtext && <Richtext tagName="h5" value={profile.name} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, name: value } : p) })} className='tsb_otc_name' placeholder="Enter name" />}

								{options.showDesignation && profile.designation && !Richtext && <p className='tsb_otc_designation' dangerouslySetInnerHTML={{ __html: profile.designation }} />}

								{options.showDesignation && Richtext && <Richtext tagName="p" value={profile.designation} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, designation: value } : p) })} className='tsb_otc_designation' placeholder="Enter designation" />}

								{options.showBio && profile.bio && !Richtext && <p className='tsb_otc_bio' dangerouslySetInnerHTML={{ __html: profile.bio }} />}

								{options.showBio && Richtext && <Richtext tagName="p" value={profile.bio} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, bio: value } : p) })} className='tsb_otc_bio' placeholder="Enter bio" />}
							</div>

							{options.showSocial && profile.social?.length > 0 && (
								<ul className='tsb_otc_social_links'>
									{profile.social.map((item, sIndex) => (
										<li key={sIndex}>
											<a
												href={item.link || '#'}
												target={options.openInNewTab ? '_blank' : '_self'}
												rel={options.openInNewTab ? 'noopener noreferrer' : ''}
												aria-label={profile.name}
												dangerouslySetInnerHTML={{ __html: normalizeIconColor(item.icon) }}
											/>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OneCard;
