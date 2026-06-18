import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';
import {
	Background,
	BoxControl,
	ColorControl,
	Device,
	Label,
	ShadowControl,
	Typography
} from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../utils/functions';
import { imageFitOptions } from '../../../../utils/options';

const Style = ({ attributes, setAttributes, device }) => {
	const { styles = {}, options = {} } = attributes;

	return (
		<>
			{/* ── Container ─────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Container', 'team-section')} initialOpen={false}>
				<UnitControl
					label={__('Max Width', 'team-section')}
					value={styles?.maxWidth}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'maxWidth') })}
				/>

				<Background
					className='mt15'
					label={__('Background', 'team-section')}
					value={styles?.bg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bg') })}
				/>

				<PanelRow className='mt15'>
					<Label>{__('Padding', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<BoxControl
					values={styles?.padding?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'padding', device) })}
				/>

				<PanelRow>
					<Label>{__('Margin', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<BoxControl
					values={styles?.margin?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'margin', device) })}
				/>
			</PanelBody>

			{/* ── Card ──────────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Team Member', 'team-section')} initialOpen={false}>
				<Background
					label={__('Background', 'team-section')}
					value={styles?.card?.bg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'bg') })}
				/>

				<Background
					className='mt15'
					label={__('Hover Background', 'team-section')}
					value={styles?.card?.hoverBg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'hoverBg') })}
				/>

				<BoxControl
					className='mt15'
					label={__('Padding', 'team-section')}
					values={styles?.card?.padding}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'padding') })}
				/>

				<BoxControl
					className='mt15'
					label={__('Radius', 'team-section')}
					values={styles?.card?.radius}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'radius') })}
				/>

				<ShadowControl
					className='mt15'
					label={__('Box Shadow', 'team-section')}
					value={styles?.card?.shadow}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'shadow') })}
				/>
			</PanelBody>

			{/* ── Avatar ────────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Image', 'team-section')} initialOpen={false}>
				<UnitControl
					label={__('Size', 'team-section')}
					value={styles?.avatar?.size}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'avatar', 'size') })}
				/>
				<SelectControl
					className='mt15'
					label={__('Image Fit', 'team-section')}
					value={styles?.avatar?.imageFit}
					options={imageFitOptions}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'avatar', 'imageFit') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Padding', 'team-section')}
					values={styles?.avatar?.padding}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'avatar', 'padding') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Radius', 'team-section')}
					values={styles?.avatar?.radius}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'avatar', 'radius') })}
				/>
				<ShadowControl
					className='mt15'
					label={__('Box Shadow', 'team-section')}
					value={styles?.avatar?.shadow}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'avatar', 'shadow') })}
				/>
			</PanelBody>

			{/* ── Name ──────────────────────────────────────────── */}
			{options.showName && (
			<PanelBody className='bPlPanelBody' title={__('Name', 'team-section')} initialOpen={false}>
				<ColorControl
					label={__('Color', 'team-section')}
					value={styles?.name?.color}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'color') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Hover Color', 'team-section')}
					value={styles?.name?.hoverColor}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'hoverColor') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Margin', 'team-section')}
					values={styles?.name?.margin}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'margin') })}
				/>
				<Typography
					className='mt15'
					label={__('Typography', 'team-section')}
					value={styles?.name?.typo}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'typo') })}
				/>
			</PanelBody>
			)}

			{/* ── Designation ───────────────────────────────────── */}
			{options.showDesignation && (
			<PanelBody className='bPlPanelBody' title={__('Designation', 'team-section')} initialOpen={false}>
				<ColorControl
					label={__('Color', 'team-section')}
					value={styles?.designation?.color}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'color') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Hover Color', 'team-section')}
					value={styles?.designation?.hoverColor}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'hoverColor') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Margin', 'team-section')}
					values={styles?.designation?.margin}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'margin') })}
				/>
				<Typography
					className='mt15'
					label={__('Typography', 'team-section')}
					value={styles?.designation?.typo}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'typo') })}
				/>
			</PanelBody>
			)}

			{/* ── Bio ───────────────────────────────────────────── */}
			{options.showBio && (
			<PanelBody className='bPlPanelBody' title={__('Bio', 'team-section')} initialOpen={false}>
				<ColorControl
					label={__('Color', 'team-section')}
					value={styles?.bio?.color}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'color') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Hover Color', 'team-section')}
					value={styles?.bio?.hoverColor}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'hoverColor') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Margin', 'team-section')}
					values={styles?.bio?.margin}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'margin') })}
				/>
				<Typography
					className='mt15'
					label={__('Typography', 'team-section')}
					value={styles?.bio?.typo}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'typo') })}
				/>
			</PanelBody>
			)}

			{/* ── Social Icons ──────────────────────────────────── */}
			{options.showSocial && (
			<PanelBody className='bPlPanelBody' title={__('Social Icons', 'team-section')} initialOpen={false}>
				<ColorControl
					label={__('Icon Color', 'team-section')}
					value={styles?.social?.iconColor}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconColor') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Icon Hover Color', 'team-section')}
					value={styles?.social?.iconHoverColor}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconHoverColor') })}
				/>
				<Background
					className='mt15'
					label={__('Background', 'team-section')}
					value={styles?.social?.iconBg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconBg') })}
				/>
				<Background
					className='mt15'
					label={__('Hover Background', 'team-section')}
					value={styles?.social?.iconHoverBg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconHoverBg') })}
				/>
				<RangeControl
					className='mt15'
					label={__('Icon Size (px)', 'team-section')}
					value={styles?.social?.iconSize}
					min={8}
					max={40}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconSize') })}
				/>
				<UnitControl
					className='mt15'
					label={__('Button Size', 'team-section')}
					value={styles?.social?.btnSize}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'btnSize') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Button Radius', 'team-section')}
					values={styles?.social?.btnRadius}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'btnRadius') })}
				/>
				<RangeControl
					className='mt15'
					label={__('Gap Between Icons (px)', 'team-section')}
					value={styles?.social?.gap}
					min={0}
					max={60}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'gap') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Margin', 'team-section')}
					values={styles?.social?.margin}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'margin') })}
				/>
			</PanelBody>
			)}
		</>
	);
};

export default Style;
