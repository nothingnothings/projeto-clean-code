function renderContent(renderInformation) {
  const element = renderInformation.element;
  const rootElement = renderInformation.root;

  validateElementType(element);

  const content = createRenderableContent(renderInformation);

  renderOnRoot(content, rootElement);
}

function validateElementType(element) {
  if (element === 'script' || element === 'SCRIPT') {
    throw new Error('Invalid element.');
  }
}

function createRenderableContent(renderInformation) {
  const tags = createTags(
    renderInformation.element,
    renderInformation.attributes
  );

  const content = renderInformation.content;

  const template = tags.opening + content + tags.closing;

  return template;
}

function renderOnRoot(content, rootElement) {
  rootElement.innerHTML = content;
}

function createTags(element, attributes) {
  const attributeList = generateAttributeList(attributes);
  const openingTag = BuildTag({
    element: element,
    attributes: attributeList,
    isOpening: true,
  });

  const closingTag = BuildTag({
    element: element,
    isOpening: false,
  });

  return { opening: openingTag, closing: closingTag };
}

function generateAttributeList(attributes) {
  let attributeList = '';

  for (const attribute of attributes) {
    attributeList = `${attributeList} ${attribute.name}= "${attribute.value}"`;
  }

  return attributeList;
}

function BuildTag(tagInformation) {
  const element = tagInformation.element;
  const attributes = tagInformation.attributes;
  const isOpening = tagInformation.isOpening;

  let tag;

  if (isOpening) {
    tag = '<' + element + attributes + '>';
  } else {
    tag = '</' + element + '>';
  }

  return tag;
}
