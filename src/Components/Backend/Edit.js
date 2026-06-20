import { useBlockProps } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import Settings from './Settings/Settings';
import Style from '../Common/Style';
import { OneCard } from '../Common/cards/OneCard';
import Richtext from '../richtext/Richtext';

const Edit = (props) => {
	const { attributes, setAttributes, clientId, device } = props;

	return (
		<>
			<Settings {...{ attributes, setAttributes, device }} />

			<div {...useBlockProps()}>
				<Style attributes={attributes} id={`block-${clientId}`} />
				<OneCard attributes={attributes} Richtext={Richtext} setAttributes={setAttributes} />
			</div>
		</>
	);
};

export default withSelect((select) => {
	const { getDeviceType } = select('core/editor');
	return {
		device: getDeviceType()?.toLowerCase()
	};
})(Edit);
