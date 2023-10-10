import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Bouton.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:20 */
export const Bouton: FC<Props> = memo(function Bouton(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.text}>Connexion</div>
    </div>
  );
});
