import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Bouton } from './Bouton/Bouton';
import classes from './ConnexionMobile.module.css';
import { IconLockCircleIcon } from './IconLockCircleIcon';
import { Information } from './Information/Information';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const ConnexionMobile: FC<Props> = memo(function ConnexionMobile(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.connexion}>Connexion</div>
      <Information />
      <div className={classes.rectangle2}></div>
      <div className={classes.motDePasse}>Mot de passe</div>
      <div className={classes.IconLockCircle}>
        <IconLockCircleIcon className={classes.icon} />
      </div>
      <Bouton />
      <div className={classes.sInscrire}>S’inscrire</div>
      <div className={classes.motDePasseOublie}>Mot de passe oublié?</div>
    </div>
  );
});
