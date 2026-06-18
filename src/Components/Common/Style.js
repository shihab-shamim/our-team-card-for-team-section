import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles = {} } = attributes || {};

	const mainSl        = `#${id}`;
	const sectionSl     = `${mainSl} .tsb_otc_section`;
	const containerSl   = `${sectionSl} .tsb_otc_container`;
	const gridSl        = `${containerSl} .tsb_otc_cards`;
	const cardSl        = `${gridSl} .tsb_otc_member_card`;
	const avatarSl      = `${cardSl} .tsb_otc_avatar`;
	const imgSl         = `${avatarSl} img`;
	const infoSl        = `${cardSl} .tsb_otc_info`;
	const nameSl        = `${infoSl} .tsb_otc_name`;
	const designationSl = `${infoSl} .tsb_otc_designation`;
	const bioSl         = `${infoSl} .tsb_otc_bio`;
	const socialListSl  = `${cardSl} .tsb_otc_social_links`;
	const socialLinkSl  = `${socialListSl} li a`;
	// Relative chain (no #id prefix) for combining with the card :hover state.
	const socialLinkRel = `.tsb_otc_social_links li a`;

	const cardShadow   = getMultiShadowCSS(styles?.card?.shadow);
	const avatarShadow = getMultiShadowCSS(styles?.avatar?.shadow);

	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS('', styles?.name?.typo)?.googleFontLink || ''}
		${getTypoCSS('', styles?.designation?.typo)?.googleFontLink || ''}
		${getTypoCSS('', styles?.bio?.typo)?.googleFontLink || ''}

		${getTypoCSS(nameSl, styles?.name?.typo)?.styles || ''}
		${getTypoCSS(designationSl, styles?.designation?.typo)?.styles || ''}
		${getTypoCSS(bioSl, styles?.bio?.typo)?.styles || ''}

		${sectionSl} {
			margin: ${getBoxCSS(styles?.margin?.desktop)};
		}

		${containerSl} {
			max-width: ${styles?.maxWidth || '1140px'};
			padding: ${getBoxCSS(styles?.padding?.desktop)};
			${getBackgroundCSS(styles?.bg)}
		}

		${gridSl} {
			grid-template-columns: repeat(${styles?.columns?.desktop || 4}, 1fr);
			column-gap: ${styles?.columnGap ?? 30}px;
			row-gap: ${styles?.rowGap ?? 30}px;
		}

		${cardSl} {
			${getBackgroundCSS(styles?.card?.bg)}
			padding: ${getBoxCSS(styles?.card?.padding)};
			border-radius: ${getBoxCSS(styles?.card?.radius)};
			box-shadow: ${cardShadow || 'none'};
		}

		${cardSl}::before {
			border-radius: ${getBoxCSS(styles?.card?.radius)};
			${getBackgroundCSS(styles?.card?.hoverBg)}
		}

		${avatarSl} {
			width: ${styles?.avatar?.size || '210px'};
			height: ${styles?.avatar?.size || '210px'};
			padding: ${getBoxCSS(styles?.avatar?.padding)};
			border-radius: ${getBoxCSS(styles?.avatar?.radius)};
			box-shadow: ${avatarShadow || 'none'};
		}

		${imgSl} {
			object-fit: ${styles?.avatar?.imageFit || 'cover'};
			border-radius: ${getBoxCSS(styles?.avatar?.radius)};
		}

		${nameSl} {
			color: ${styles?.name?.color || '#333333'};
			margin: ${getBoxCSS(styles?.name?.margin)};
		}

		${designationSl} {
			color: ${styles?.designation?.color || '#5a9ec0'};
			margin: ${getBoxCSS(styles?.designation?.margin)};
		}

		${bioSl} {
			color: ${styles?.bio?.color || '#666666'};
			margin: ${getBoxCSS(styles?.bio?.margin)};
		}

		${cardSl}:hover .tsb_otc_name {
			color: ${styles?.name?.hoverColor || '#ffffff'};
		}
		${cardSl}:hover .tsb_otc_designation {
			color: ${styles?.designation?.hoverColor || 'rgba(255,255,255,0.85)'};
		}
		${cardSl}:hover .tsb_otc_bio {
			color: ${styles?.bio?.hoverColor || 'rgba(255,255,255,0.85)'};
		}

		${socialListSl} {
			gap: ${styles?.social?.gap ?? 6}px;
			margin: ${getBoxCSS(styles?.social?.margin)};
		}

		${socialLinkSl} {
			color: ${styles?.social?.iconColor || '#ffffff'};
			width: ${styles?.social?.btnSize || '36px'};
			height: ${styles?.social?.btnSize || '36px'};
			border-radius: ${getBoxCSS(styles?.social?.btnRadius) || '50%'};
			${getBackgroundCSS(styles?.social?.iconBg)}
		}
		${socialLinkSl} svg {
			width: ${styles?.social?.iconSize || 14}px;
			height: ${styles?.social?.iconSize || 14}px;
		}

		/* Card hover → show the configured Icon Hover Background on every icon */
		${cardSl}:hover ${socialLinkRel} {
			${getBackgroundCSS(styles?.social?.iconHoverBg)}
		}

		/* Icon hover → change only the hovered icon's color (Icon Hover Color).
		   Extra :hover gives higher specificity so it wins over the card-hover rule. */
		${socialLinkSl}:hover,
		${cardSl}:hover ${socialLinkRel}:hover {
			color: ${styles?.social?.iconHoverColor || '#ffffff'};
		}
		${socialLinkSl}:hover svg,
		${cardSl}:hover ${socialLinkRel}:hover svg {
			color: ${styles?.social?.iconHoverColor || '#ffffff'};
			fill: ${styles?.social?.iconHoverColor || '#ffffff'};
		}

		${tabBreakpoint} {
			${sectionSl} {
				margin: ${getBoxCSS(styles?.margin?.tablet)};
			}
			${containerSl} {
				padding: ${getBoxCSS(styles?.padding?.tablet)};
			}
			${gridSl} {
				grid-template-columns: repeat(${styles?.columns?.tablet || 2}, 1fr);
			}
		}

		${mobileBreakpoint} {
			${sectionSl} {
				margin: ${getBoxCSS(styles?.margin?.mobile)};
			}
			${containerSl} {
				padding: ${getBoxCSS(styles?.padding?.mobile)};
			}
			${gridSl} {
				grid-template-columns: repeat(${styles?.columns?.mobile || 1}, 1fr);
			}
		}

	`}} />;
};

export default Style;
