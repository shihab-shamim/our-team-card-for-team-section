import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'team-section') },
	{ name: 'style', title: __('Style', 'team-section') }
];

export const imageFitOptions = [
	{ value: 'cover',      label: __('Cover',      'team-section') },
	{ value: 'contain',    label: __('Contain',    'team-section') },
	{ value: 'fill',       label: __('Fill',       'team-section') },
	{ value: 'scale-down', label: __('Scale Down', 'team-section') },
	{ value: 'none',       label: __('None',       'team-section') }
];

export const textAlignOptions = [
	{ value: 'center', label: __('Center', 'team-section') },
	{ value: 'left',   label: __('Left',   'team-section') },
	{ value: 'right',  label: __('Right',  'team-section') }
];
