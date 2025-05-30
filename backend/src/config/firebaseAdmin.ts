const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

const serviceAccount = require('../../serviceAccountKey.json');

const app = initializeApp({
  credential: cert(serviceAccount),
});

const auth = getAuth(app);

export { auth };
