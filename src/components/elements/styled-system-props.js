// Complete list of styled-system props to exclude from DOM
export const styledSystemProps = new Set([
  // space
  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
  'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY',
  'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY',
  // layout
  'width', 'height', 'display', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight',
  'size', 'verticalAlign', 'overflow', 'overflowX', 'overflowY',
  // flexbox
  'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'alignContent', 'flex',
  'flexGrow', 'flexShrink', 'flexBasis', 'justifySelf', 'alignSelf', 'order',
  // color
  'color', 'backgroundColor', 'bg',
  // border
  'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft',
  'borderColor', 'borderStyle', 'borderWidth', 'borderRadius',
  // position
  'position', 'top', 'right', 'bottom', 'left', 'zIndex',
  // gridArea
  'gridArea',
  // typography
  'lineHeight', 'fontFamily', 'fontWeight', 'fontSize', 'fontStyle', 'textAlign',
  'textDecoration', 'textIndent', 'letterSpacing', 'textTransform',
  // variant
  'variant',
]);

export const shouldForwardProp = (prop) => !styledSystemProps.has(prop);
