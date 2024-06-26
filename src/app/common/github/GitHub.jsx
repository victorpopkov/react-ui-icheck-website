import React from 'react';
import config from '@Config';
import * as styles from './GitHub.scss';

const GitHub = () => (
  <div className={styles.github}>
    <a
      aria-label={`Star victorpopkov/${config.lib.name} on GitHub`}
      className="github-button"
      data-icon="octicon-star"
      data-show-count="true"
      data-size="large"
      href={`https://github.com/victorpopkov/${config.lib.name}`}
    >
      Star
    </a>
    <a
      aria-label={`Watch victorpopkov/${config.lib.name} on GitHub`}
      className="github-button"
      data-icon="octicon-eye"
      data-show-count="true"
      data-size="large"
      href={`https://github.com/victorpopkov/${config.lib.name}/subscription`}
    >
      Watch
    </a>
  </div>
);

export default GitHub;
