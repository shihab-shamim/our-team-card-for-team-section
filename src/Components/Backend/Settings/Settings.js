import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes, device }) => {
	const { alignment } = attributes;

	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more blocks? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>bBlocks</a>
			</div>

			<TabPanel
				className='bPlTabPanel wp-block-tsb-our-team-cards-pro'
				activeClass='activeTab'
				tabs={generalStyleTabs}
				onSelect={tabController}
			>
				{tab => <>
					{'general' === tab.name && <General device={device} attributes={attributes} setAttributes={setAttributes} />}
					{'style'   === tab.name && <Style   device={device} attributes={attributes} setAttributes={setAttributes} />}
				</>}
			</TabPanel>
		</InspectorControls>

		<BlockControls>
			<AlignmentToolbar
				value={alignment}
				onChange={val => setAttributes({ alignment: val })}
				describedBy={__('Team Cards Alignment', 'team-section')}
				alignmentControls={[
					{ title: __('Align left',   'team-section'), align: 'left',   icon: 'align-left'   },
					{ title: __('Align center', 'team-section'), align: 'center', icon: 'align-center' },
					{ title: __('Align right',  'team-section'), align: 'right',  icon: 'align-right'  }
				]}
			/>
		</BlockControls>
	</>;
};
export default Settings;
