import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import { OneCard } from './Components/Common/cards/OneCard';

document.addEventListener('DOMContentLoaded', () => {
	const blockEls = document.querySelectorAll('.wp-block-tsb-our-team-cards-pro');
	blockEls.forEach(blockEl => {
		const attributes = JSON.parse(blockEl.dataset.attributes);

		createRoot(blockEl).render(<>
			<Style attributes={attributes} id={blockEl.id} />
			<OneCard attributes={attributes} />
		</>);

		blockEl.removeAttribute('data-attributes');
	});
});
