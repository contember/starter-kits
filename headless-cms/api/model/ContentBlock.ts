import { SchemaDefinition as def } from '@contember/schema-definition'
import { Page, Image, Content, Button } from '.'

export const ContentBlockType = def.createEnum(
	'textWithImage', // primaryText, jsonContent, images, link
	'logos', // jsonContent, images
	'text' // primaryText, jsonContent
)

export class ContentBlock {
	page = def.manyHasOne(Page, 'blocks').cascadeOnDelete()
	order = def.intColumn().notNull()
	type = def.enumColumn(ContentBlockType).notNull()

	primaryText = def.stringColumn()
	jsonContent = def.stringColumn()
	images = def.oneHasMany(ContentImage, 'contentBlock')
	buttons = def.oneHasMany(ContentButton, 'contentBlock')
	content = def.oneHasOne(Content)
}

export class ContentImage {
	image = def.oneHasOne(Image)
	order = def.intColumn().notNull()
	contentBlock = def.manyHasOne(ContentBlock, 'images')
}

export class ContentButton {
	button = def.oneHasOne(Button)
	order = def.intColumn().notNull()
	contentBlock = def.manyHasOne(ContentBlock, 'buttons')
}
