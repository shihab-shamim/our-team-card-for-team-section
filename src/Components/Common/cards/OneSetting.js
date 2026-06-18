import { TextareaControl, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { updateData } from '../../../utils/functions';
import { IconLibrary, InlineDetailMediaUpload } from '../../../../../bpl-tools/Components';

const OneSetting = (props) => {
	const { attributes, setAttributes, index } = props;
	const { profiles, options = {} } = attributes || {};
	const item = profiles[index];
	const socials = item?.social || [];

	return (
		<div>
			<InlineDetailMediaUpload
				placeholder='https://...'
				label={__('Photo', 'team-section')}
				value={{ url: item?.image }}
				onChange={(value) =>
					setAttributes({ profiles: updateData(profiles, value.url, index, 'image') })
				}
			/>

			{options.showName && (
				<TextControl
					className='mt10'
					placeholder={__('Full name...', 'team-section')}
					label={__('Name', 'team-section')}
					value={item?.name || ''}
					onChange={(val) =>
						setAttributes({ profiles: updateData(profiles, val, index, 'name') })
					}
				/>
			)}

			{options.showDesignation && (
				<TextControl
					className='mt10'
					placeholder={__('Job title or role...', 'team-section')}
					label={__('Designation', 'team-section')}
					value={item?.designation || ''}
					onChange={(val) =>
						setAttributes({ profiles: updateData(profiles, val, index, 'designation') })
					}
				/>
			)}

			{options.showBio && (
				<TextareaControl
					className='mt10'
					rows={2}
					placeholder={__('Short bio or description...', 'team-section')}
					label={__('Bio', 'team-section')}
					value={item?.bio || ''}
					onChange={(val) =>
						setAttributes({ profiles: updateData(profiles, val, index, 'bio') })
					}
				/>
			)}

			{options.showSocial && (
			<div className='bpl-social-settings' style={{ marginTop: '20px' }}>
				<style>{`
					.bpl-social-icon-preview svg {
						width: 20px !important;
						height: 20px !important;
						fill: currentColor !important;
					}
				`}</style>
				<h4 style={{ marginBottom: '10px' }}>{__('Social Links', 'team-section')}</h4>

				{socials.map((socialItem, sIndex) => (
					<div
						key={sIndex}
						style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}
					>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
								<span
									className='bpl-social-icon-preview'
									dangerouslySetInnerHTML={{ __html: socialItem.icon || '' }}
									style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '4px', color: '#555' }}
								/>
								<IconLibrary
									label=' '
									onChange={(val) =>
										setAttributes({ profiles: updateData(profiles, val, index, 'social', sIndex, 'icon') })
									}
								/>
							</div>
							<Button
								icon='trash'
								isDestructive
								label={__('Remove Social Link', 'team-section')}
								onClick={() => {
									const newSocials = socials.filter((_, i) => i !== sIndex);
									setAttributes({ profiles: updateData(profiles, newSocials, index, 'social') });
								}}
							/>
						</div>
						<TextControl
							label={__('Link URL', 'team-section')}
							placeholder='https://...'
							value={socialItem.link || ''}
							onChange={(val) =>
								setAttributes({ profiles: updateData(profiles, val, index, 'social', sIndex, 'link') })
							}
						/>
					</div>
				))}

				<Button
					icon='plus'
					isSecondary
					onClick={() => {
						const newSocials = [
							...socials,
							{
								icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' width='14' height='14' fill='currentColor'><path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'/></svg>",
								link: '#'
							}
						];
						setAttributes({ profiles: updateData(profiles, newSocials, index, 'social') });
					}}
					style={{ marginTop: '5px' }}
				>
					{__('Add Social Link', 'team-section')}
				</Button>
			</div>
			)}
		</div>
	);
};

export default OneSetting;
