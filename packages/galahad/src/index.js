import constants from './constants';
import Indexer from './Indexer';
import FieldType from './FieldType';

function indexContent(content, indexer, done) {
	const contentType = content.getContentType();
	const pk = content.getUniqueIdentifier();
	const data = content.getData();

	// We need a way to store content by type and by a unique ID

	indexer.index(contentType.getId(), pk, data).then(done);
}

function getIndexerComponent() {

	// requestPreload = signal to storage that content may be requested soon (no guarantee that it'll be loaded)
	// newContent = indicate that the new content dialog should show (this may not need to happen in indexer)
	// onContentSelected = load edit view for content

	const Indexer = <div />;
	return (
		<Indexer requestPreload={noop => noop} newContent={noop => noop} onContentSelected={noop => noop} />
	);
}

module.exports = {
	constants,
	Indexer,
	FieldType,
};