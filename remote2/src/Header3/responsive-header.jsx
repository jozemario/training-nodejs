import React from 'react';
// Call to action items
export default () => (
    <HStack>
        <Button aria-label={CTA} variant="outline">
            {CTA}
        </Button>
        <MobileDrawer />
    </HStack>
);
