import { FirebasePortfolio } from '@workspace/firebase-portfolio/src/firebase-portfolio';

export const environment = {
  production: false,
  firebase: FirebasePortfolio.config()
};
