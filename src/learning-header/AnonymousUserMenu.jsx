import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { getLoginRedirectUrl } from '@edx/frontend-platform/auth';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';

import genericMessages from '../generic/messages';

function AnonymousUserMenu({ intl }) {
  return (
    <div>     
      <Button
        variant="primary"
       // href={`${getLoginRedirectUrl(global.location.href)}`}
          href={`https://injaz.edu.jo/`}
      >
        {intl.formatMessage(genericMessages.signInSentenceCase)}
      </Button>
    </div>
  );
}

AnonymousUserMenu.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AnonymousUserMenu);
