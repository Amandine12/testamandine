import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconProfileCircleIcon } from './IconProfileCircleIcon';
import classes from './Information.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:4 */
export const Information: FC<Props> = memo(function Information(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.email}>Email</div>
      <div className={classes.IconProfileCircle}>
        <IconProfileCircleIcon className={classes.icon} />
      </div>
    </div>
  );
});
