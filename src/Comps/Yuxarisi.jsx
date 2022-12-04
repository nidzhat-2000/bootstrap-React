import Stack from 'react-bootstrap/Stack';

function HorizontalMarginStartExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="light border">First item</div>
      <div className="light border ms-auto">Second item</div>
      <div className="light border">Third item</div>
    </Stack>
  );
}

export default HorizontalMarginStartExample;